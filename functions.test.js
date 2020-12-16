test("tem que ter nome", () => {
	const person = {
		name: "Joyce",
		age: 30,
		hobbies: ["ler", "series"],
	};
	expect(person.name).toBe("Joyce");
});
