const input = document.querySelector("#inputText");
const heading = document.querySelector('#Search-detail');
const data = document.querySelector(".main-box");

const student = [
    { name: "MD Akram", marks: 60, class: "12th", address: "321 khadra" },
    { name: "khan", marks: 75, class: "9th", address: "213 delhi" },
    { name: "Aslam", marks: 95, class: "10th", address: "823 patna" },
    { name: "Rahul", marks: 90, class: "8th", address: "456 Hyderabad" },
    { name: "Abhay", marks: 18, class: "6th", address: "789 Chennai" },
    { name: "Seema", marks: 48, class: "2th", address: "789 Street" },
    { name: "Shipra", marks: 90, class: "3th", address: "23/23 sector g" },
    { name: "Ridhi", marks: 23, class: "12th", address: "3/12 Near cafe" },
    { name: "Varsha", marks: 78, class: "10th", address: "123/34 House 11" },
    { name: "Sakshi", marks: 75, class: "4th", address: "12/23 first lane" },
    { name: "Akash", marks: 38, class: "5th", address: "13/34 House 1" },
];

const students = student.map((value) => {
    return `
    <div class="child-box">
        <p>Student Name: ${value.name}</p>
        <p>Marks: ${value.marks}%</p>
        <p>Class: ${value.class}</p>
        <p>Address: ${value.address}</p>
    </div>`;
});
data.innerHTML = students.join('');

function Search() {
    input.addEventListener('input', () => {
        const searchValue = input.value.toLowerCase();
        const filteredStudents = student.filter((value) => {
            return value.name.toLowerCase().includes(searchValue);
        });
        heading.innerHTML = `Search Result for ${input.value}...`;
        displayFilteredStudents(filteredStudents);
    });
}

function displayFilteredStudents(filteredStudents) {
    const filteredStudentsHTML = filteredStudents.map((value) => {
        return `
        <div class="child-box">
            <p>Student Name: ${value.name}</p>
            <p>Marks: ${value.Marks}%</p>
            <p>Class: ${value.Class}</p>
            <p>Address: ${value.Address}</p>
        </div>`;
    });

    data.innerHTML = filteredStudentsHTML.join('');
}

Search();
