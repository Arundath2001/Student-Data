let students = [];

    function addData() {
      const name = document.getElementById("name").value;
      const age = parseInt(document.getElementById("age").value);
      const department = document.getElementById("department").value;
      const place = document.getElementById("place").value;
      const total = parseInt(document.getElementById("mark").value);
      
    if (!name || !age || !department || !total) {
        alert("Please Insert all the Details!!");
        return;
    }

      const student1 = { name, age, department, place, total };
      students.push(student1);
      displaydata(students);

      
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("department").value = "";
      document.getElementById("place").value = "";
      document.getElementById("mark").value = "";
    }

    function displaydata(data) {
      const tbody = document.getElementById("tbody");
      tbody.innerHTML = "";

      data.forEach(student => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.age;
        row.insertCell(2).textContent = student.department;
        row.insertCell(3).textContent = student.place;
        row.insertCell(4).textContent = student.total;
      });
    }

    function sortstds() {
      const value1 = document.getElementById("dropdown").value;
      students.sort((a, b) => {
        if (a[value1] > b[value1]) {
            return 1;
        } else {
            return -1;
        }
    });
      displaydata(students);
    }

    function searchstds() {
        const value2 = document.getElementById("search").value.toLowerCase();
        const data = students.filter(student =>
            Object.values(student).some(value =>
                (typeof value === 'string' && value.toLowerCase().includes(value2)) ||
                (typeof value === 'number' && value.toString().includes(value2))
            )
        );
        displaydata(data);
    }
    

    function filterstds() {
      const value3 = parseInt(document.getElementById("filterdata").value);
      
      const data = students.filter(student => student.total > value3);
      displaydata(data);
    }

    document.getElementById("dropdown").addEventListener("change", sortstds);

    function goback(){
            document.getElementById("search").value = "";
            displaydata(students);
    }