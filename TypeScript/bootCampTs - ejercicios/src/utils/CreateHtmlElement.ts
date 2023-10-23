// Tipa la siguiente función para que sea generica a la hora de crear HTMLElement del DOM y solo pueda retornar etiquetas validas
export const createElement = <K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  className?: string
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tagName);
  if (className) element.classList.add(className);
  return element;
};
