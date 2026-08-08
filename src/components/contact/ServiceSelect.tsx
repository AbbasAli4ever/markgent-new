"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

export type SelectOption = { value: string; label: string };

type ServiceSelectProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function ServiceSelect({
  label,
  value,
  options,
  onChange,
  placeholder = "Select an option",
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listboxId = useId();

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  // Close on outside click so the menu behaves like a native select.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Keep the highlighted option scrolled into view while navigating by keyboard.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelectorAll("li")
      ?.[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const openMenu = (startIndex = selectedIndex >= 0 ? selectedIndex : 0) => {
    setActiveIndex(startIndex);
    setOpen(true);
  };

  const commit = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) openMenu();
        else setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) openMenu();
        else setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        if (open) { event.preventDefault(); setActiveIndex(0); }
        break;
      case "End":
        if (open) { event.preventDefault(); setActiveIndex(options.length - 1); }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) commit(activeIndex);
        else openMenu();
        break;
      case "Escape":
        if (open) { event.preventDefault(); setOpen(false); buttonRef.current?.focus(); }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div className="mt-5 block text-sm font-medium text-ink">
      <span id={`${listboxId}-label`}>{label}</span>

      <div ref={rootRef} className="relative mt-2">
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-labelledby={`${listboxId}-label`}
          onClick={() => (open ? setOpen(false) : openMenu())}
          onKeyDown={onKeyDown}
          className={`flex min-h-11 w-full min-w-0 items-center justify-between gap-3 rounded-[12px] border bg-cream/45 px-4 py-3.5 text-left text-[15px] outline-none transition ${
            open
              ? "border-accent bg-paper ring-3 ring-accent/10"
              : "border-line-strong hover:border-accent/50"
          }`}
        >
          <span className={selected ? "text-ink" : "text-muted"}>
            {selected ? selected.label : placeholder}
          </span>
          <FiChevronDown
            aria-hidden
            className={`h-4 w-4 flex-none text-nav transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-labelledby={`${listboxId}-label`}
            tabIndex={-1}
            className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-[14px] border border-line-strong bg-paper p-1.5 shadow-[0_28px_60px_-30px_rgba(6,45,42,0.45)]"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value || "none"}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => commit(index)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-[10px] px-3.5 py-2.5 text-[14.5px] font-normal transition-colors ${
                    isActive ? "bg-cream-card text-ink" : "text-body"
                  } ${isSelected ? "font-semibold text-ink" : ""}`}
                >
                  {option.label}
                  {isSelected && <FiCheck aria-hidden className="h-4 w-4 flex-none text-accent" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
