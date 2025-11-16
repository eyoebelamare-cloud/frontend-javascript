// main.ts

/**
 * Interface definition for a Student object.
 * Requires firstName (string), lastName (string), age (number), and location (string).
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Create two student objects that conform to the Student interface.
 */
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "New York",
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "California",
};

/**
 * Create an array named studentsList containing the two student variables.
 */
const studentsList: Student[] = [student1, student2];

/**
 * Using Vanilla JavaScript, render a table and append a new row for
 * each element in the array, containing the student's first name and location.
 */
const renderTable = (students: Student[]): void => {
  // 1. Create the table element
  const table: HTMLTableElement = document.createElement("table");

  // 2. Create and append the table header
  const headerRow: HTMLTableRowElement = table.createTHead().insertRow(0);
  headerRow.insertCell(0).textContent = "First Name";
  headerRow.insertCell(1).textContent = "Location";

  // 3. Create and populate the table body
  const tbody: HTMLTableSectionElement = table.createTBody();

  students.forEach((student) => {
    // Append a new row for each student
    const row: HTMLTableRowElement = tbody.insertRow();

    // Insert cell for first name
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.textContent = student.firstName;

    // Insert cell for location
    const locationCell: HTMLTableCellElement = row.insertCell();
    locationCell.textContent = student.location;
  });

  // 4. Append the fully constructed table to the document body
  document.body.appendChild(table);
};

// Execute the function to render the table on the page load
renderTable(studentsList);
