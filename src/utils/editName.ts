export const editName = (name: string, limit: number) => {
    return name.length >= limit + 3 ? name.slice(0, limit) + "..." : name
}