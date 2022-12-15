// T = é a tipagem original que no caso e a minhas props
// R = é a tipagem de replace, que no caso é quais props que eu quero substituir
export type Replace<T, R> = Omit<T, keyof R> & R;
