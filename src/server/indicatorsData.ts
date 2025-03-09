export const indicatorsData = () => {
    const data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 401) + 800);
    return data;
}