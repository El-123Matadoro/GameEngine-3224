Ваша просьба досить широкої тематики, але ось приклад базової обробки даних на TypeScript, включаючи створення інтерфейсів, класів, функцій та роботу з масивами:

```typescript
// BasicDataProcessing.ts

interface IStudent {
    id: number;
    name: string;
    age: number;
    grades: number[];
}

class Student implements IStudent {
    id: number;
    name: string;
    age: number;
    grades: number[];

    constructor(id: number, name: string, age: number, grades: number[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    calculateAverageGrade(): number {
        let sum = 0;
        this.grades.forEach((grade) => {
            sum += grade;
        });
        return sum / this.grades.length;
    }
}

class School {
    students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    calculateAverageGradeForSchool(): number {
        let sum = 0;
        this.students.forEach((student) => {
            sum += student.calculateAverageGrade();
        });
        return sum / this.students.length;
    }
}

// Create new school
let school = new School();

// Create new students
let student1 = new Student(1, "John Doe", 16, [78, 92, 88, 95, 68]);
let student2 = new Student(2, "Jane Doe", 15, [88, 92, 90, 95, 85]);
let student3 = new Student(3, "Jim Doe", 17, [68, 72, 78, 75, 70]);

// Add students to school
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);

console.log("Average grade for John Doe: " + student1.calculateAverageGrade());
console.log("Average grade for Jane Doe: " + student2.calculateAverageGrade());
console.log("Average grade for Jim Doe: " + student3.calculateAverageGrade());

console.log("Average grade for School: " + school.calculateAverageGradeForSchool());
```

Цей код створює модель студентів і школи. Кожен студент має набір оцінок, а школа складається зі студентів. Є функції для розрахунку середньої оцінки як для окремого студента, так і для всієї школи.