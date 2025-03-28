/**
 * Composable to track which element from an array of refs is visible in the viewport
 * using IntersectionObserver.
 *
 * @param {Object} props - The props object
 * @param {Ref<HTMLElement | null>[]} props.refs - Array of refs to observe
 * @param {IntersectionObserverInit} [props.options] - Optional IntersectionObserver options
 *
 * @returns {Object} Returns an object containing:
 * - visibleElement: Readonly ref containing the ID of the currently visible element
 * - isElementVisible: Function to check if a specific element ID is currently visible
 *
 * @example
 * ```ts
 * const section1 = ref<HTMLElement | null>(null);
 * const section2 = ref<HTMLElement | null>(null);
 *
 * const { visibleElement, isElementVisible } = useIsVisible({
 *   refs: [section1, section2],
 *   options: { threshold: 0.5 }
 * });
 *
 * *** Check if specific section is visible ***
 * const isSection1Visible = computed(() => isElementVisible('section1'));
 * ```
 */
interface UseIsVisibleProps {
  refs: Ref<HTMLElement | null>[];
  options?: IntersectionObserverInit;
}

export const useIsVisible = ({ refs, options = {} }: UseIsVisibleProps) => {
  const visibleElement = ref<string | null>(null);
  let observer: IntersectionObserver | null = null;

  // Default configuration of the IntersectionObserver
  const defaultOptions: IntersectionObserverInit = {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: "0px",
    ...options,
  };

  // Create the observer only in the client
  const setupObserver = () => {
    if (typeof window === "undefined") return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Determine if the element is near the center of the viewport
        if (entry.isIntersecting && isCenteredInViewport(entry.target)) {
          visibleElement.value = entry.target.id;
        }
      });
    }, defaultOptions);
  };

  // Function to determine if an element is centered in the viewport
  const isCenteredInViewport = (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;

    // Consider the element is centered if it's within 20% of the viewport height
    const tolerance = window.innerHeight * 0.2;
    return Math.abs(elementCenter - viewportCenter) < tolerance;
  };

  // Observe the elements
  const observeElements = () => {
    if (!observer) return;

    refs.forEach((ref) => {
      if (ref.value && ref.value.id) {
        observer?.observe(ref.value);
      } else {
        console.warn("Element ref is missing or has no id attribute");
      }
    });
  };

  // Clean the observer
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    visibleElement.value = null;
  };

  onMounted(() => {
    setupObserver();
    observeElements();
  });

  onUnmounted(() => {
    cleanup();
  });

  // Helper
  const isElementVisible = (id: string) => visibleElement.value === id;

  return {
    visibleElement: readonly(visibleElement),
    isElementVisible,
  };
};
