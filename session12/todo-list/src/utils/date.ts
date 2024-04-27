function formateDate(date: string) {
  return new Date(date).toISOString().split("T")[0];
}

export { formateDate };
