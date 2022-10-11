import { useDebounceEffect } from "ahooks";
import { DebounceOptions } from "ahooks/es/useDebounce/debounceOptions";
import { useEffect } from "react";

/**
 * - used for Info page
 * - filter be {}, then call fn right now
 * - else, wait 800ms default to call fn.
 */

export default function usePageInfoFilterEffect(
  filter: object,
  fn: VoidFunction,
  options?: DebounceOptions
) {
  useEffect(() => {
    if (JSON.stringify(filter) == "{}") {
      fn();
    }
  }, [filter]);

  useDebounceEffect(
    () => {
      if (JSON.stringify(filter) != "{}") {
        fn();
      }
    },
    [filter],
    { wait: 800, ...options }
  );
}
