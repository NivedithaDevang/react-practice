type StudentProps = {
    name: string;
    course: string;
    age: number;
};

function DisplayStudent({ name, course, age }: StudentProps) {
    console.log(`Name: ${name}`);
    console.log(`Course: ${course}`);
    console.log(`Age: ${age}`);

}

DisplayStudent({
    name: "Alex",
    course: "TypeScript",
    age: 20,
});