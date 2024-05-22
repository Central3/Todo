export default function task(
    id,
    title,
    desc,
    dueDate,
    priority,
    notes,
    checklist
) {
    return { id, title, desc, dueDate, priority, notes, checklist };
}
