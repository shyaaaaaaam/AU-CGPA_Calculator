function setCookie(cname, cvalue, exdays=null) {
    if (exdays == null) {
        exdays = 10000;
    }
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }   
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkcookie() {
    if ((getCookie('omitfail') == '') || (getCookie('omitfail') == null)) {
        setCookie('omitfail', 'false');
    }
    if ((getCookie('precision') == '') || (getCookie('precision') == null)) {
        setCookie('precision', '3');
    }
    if ((getCookie('creditsdata') == '') || (getCookie('creditsdata') == null)) {
        var creddata = 
        { 'HS5151' : 4 ,'HS7151':4, 'HS7251':4, 
        'HS5251' : 4,'CE5361':2, 'HS7561':2,'CE7512':2,
        'HU5171' : 3, 'HU5275' : 3, 'IT5301' : 3, 'IT5302' : 3, 'IT5351' : 3, 'IT5352' : 3, 
        'CE5311':2,'CE5312':2,'BS7161':2, 'CE7362':2,'CE7511':2,
        'CE5461':2,'CE5411':2,'CE5312':2,'CE7261':2,'CE7311':2, 
        'CE5511':2,'CE5512':2,'GE7152' : 4,'CE7353':4,'CE7411':2,
        'CE7603':4,'CE7612':2,'CE7712':2,'CE7611':2, 'CE7613':2,
        'CE7711':2, 'CE7713':2,'CE7811':10,
        'CE5611':2,'CE5612':2,'CE5712':2,'MA7302':4,'MA7354':4,
        'CE5613':1,'CE5711':2,'CE5811':8,'PH5151':3, 'MA7358':4,'MA7353':4,
        'MA5158' : 4, 'MA5356' : 4,'MA7151':4, 'MA7251':4, 'MA7451':4,
        'MA7359':4, 'MA7355':4,'GE7161' : 2,'GE7162' : 2,'EC7261':2,
        'MA5252' : 4, 'GE5152' : 4, 'GE5153':3, 'EC7211':2,'EC7511':2,'EC7512':1,
        'EC7352':4,'EC7311':2,'EC7411':2,'EC7412':2,'EC7713':2,
        'BS5161' : 2, 'EC5251' : 4, 'EC7712':2,'EC7711':2,'EC7561':2,
        'GE5161' : 2, 'GE5251' : 3, 'EE5313' : 2, 'EC7611':2,'EC7612':2,'EC7613':1,
        'IT5211' : 2, 'GE5162' : 2,'EC7811':10,
        'BM7311':2,'BM7312':2,'BM7411':2,'BM7412':2,'BM7511':2,
        'BM7611':2,'BM7612':2,'BM7711':2,'BM7712':2,'BM7713':1, 
        'ME5361':2,'ME5401':4,'BM7811':10,'ME7761':2,'ME7611':2,  
        'ME5461':2, 'ME5411':2,'ME7552':4,'ME7501':2,'ME7511':2, 
        'ME5511':2,'ME5512':2,'ME7411':2,'ME7361':2,'ME7601':4, 'ME7602':4,
        'ME5611':2,'ME5612':2,'ME7301':4,'ME7712':2,'ME7711':2,'ME7811':10,  
        'ME5761':2, 'ME7561':2,'ME7261':2,  
        'ME5513' :2,'IE5811':8,
        'IT5311' : 2, 'EC5211' : 2,
        'IT5312' : 2, 'EC5301' : 4,
        'IT5411' : 2, 'IT5401' : 3, 'IT5402' : 3, 'IT5403' : 3, 'IT5451' : 3, 
        'EC5304' : 4,
        'IT5412' : 2,'EC5311' : 2,
        'EC5312' : 2,'BM5311' :2,
        'BM5411' :2, 'BM5511' :2, 
        'BM5512' :2, 'BM5611' :2, 
        'IT5511' : 2, 'IT5201' : 3,
        'EC5403' :4,
        'IT5512' : 2,'EC5411' :2,
        'IT5611' : 2,'EC5412' :2,
        'EC5413' : 2 ,'BM5712':2,
        'BM5513':2,'BM5711':2,
        'BM5811':8, 'EE5211' : 2,
        'IT5612' : 2,'EC5511' :2, 
        'IT5513' : 2,'EC5561 ':2,
        'IT5613' : 1,'EC5611':2, 
        'IT5811' : 8, 'EC5711':2,
        'EE5261' : 2, 'EE5251' : 3,
        'GE5151' : 3,
        'EC5612':2,
        'MA5002' : 4,'EC5512':2,
        'MA5356' : 4,'EC5811':8,
        'MA5302' : 4,'MA5355':4, 'MA7357':4,'MA7451':4, 
        'AD5091' : 0,'EE5304':4,
        'AD5092' : 0, 'EE5311':2, 'EE5312':2,'EE7301':4,'EC7312':2,
        'AD5093' : 0, 'EE5411':2, 'EE5412':2,'EE7302':4,'EE7211':2,'EE7261':2,
        'AD5094' : 0, 'EE5511':2, 'EE5512':2,'EE7303':4,'EE7401':4,'EE7811':10, 
        'AD5095' : 0, 'EE5611':2, 'EE5612':2,'EE7402':4,'EE7411':2,'EE7412':2,
        'AD5096' : 0, 'EE5711':2, 'EE5712':2,'EE7511':2,'EE7512':2,'EE7504':4, 
        'AD5097' : 0, 'EE5811':8,'EE7602':4, 'EE7611':2,'EE7612':2,'EE7613':1,'EE7711':2,'EE7712':1,
        'AD5098' : 0,'CS7511':2, 'CS7512':2,'CS7711':2,'CS7712':2,'CS7713':1,
        'CS7611':2, 'CS7612':2,'CS7701':4,'CS7811':10, 
        'CS7311':4,'CS7211':2,'CS7312':2,'CS7451':4,
        'CS7411':2, 'CS7412':2,'CS7502':4, 'CY5151':3, 
        'IT7211':2, 'IT7311':2,'IT7312':2,'IT7811':10, 
        'IT7411':2,'IT7412':2,'IT7611':2,'IT7612':2,'IT7613':2,
        'IT7511':2,'IT7512':2,'IT7513':1,'IT7711':2,'IT7712':2,
    };
        setCookie('creditsdata', JSON.stringify(creddata));
    }
    if ((getCookie('1') == '') || (getCookie('1') == null)) {
        setCookie('', '');
    }
    if ((getCookie('2') == '') || (getCookie('2') == null)) {
        setCookie('2', '');
    }
    if ((getCookie('3') == '') || (getCookie('3') == null)) {
        setCookie('3', '');
    }
    if ((getCookie('4') == '') || (getCookie('4') == null)) {
        setCookie('4', '');
    }
    if ((getCookie('5') == '') || (getCookie('5') == null)) {
        setCookie('5', '');
    }
    if ((getCookie('6') == '') || (getCookie('6') == null)) {
        setCookie('6', '');
    }
    if ((getCookie('6') == '') || (getCookie('6') == null)) {
        setCookie('6', '');
    }
    if ((getCookie('7') == '') || (getCookie('7') == null)) {
        setCookie('7', '');
    }
    if ((getCookie('8') == '') || (getCookie('8') == null)) {
        setCookie('8', '');
    }
    if ((getCookie('9') == '') || (getCookie('9') == null)) {
        setCookie('9', '');
    }
    if ((getCookie('10') == '') || (getCookie('10') == null)) {
        setCookie('10', '');
    }
}

function switchtoacoetab() {
    const urls = ["https://acoe.annauniv.edu/sems/student", "https://acoe.annauniv.edu/sems/login/student"];
    let found = false;

    chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            for (let j = 0; j < urls.length; j++) {
                if (tabs[i].url && tabs[i].url.startsWith(urls[j])) {
                    chrome.tabs.update(tabs[i].id, { active: true });
                    found = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }

        if (!found) {
            chrome.tabs.create({ url: "https://acoe.annauniv.edu/sems/login/student" });
        }
    });
}

function switchtomarkstab() {
    chrome.tabs.query({ url: "https://acoe.annauniv.edu/*" }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: "https://acoe.annauniv.edu/sems/student/mark", active: true });
    });
}

function getuserdata() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: getHTMLData,
            }, (injectionResults) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message);
                } else {
                    resolve(injectionResults[0].result);
                }
            });
        });
  
        function getHTMLData() {
            var data = [];
            data.push(document.getElementById('rollno').value);
            data.push(document.getElementById('name').value);
            data.push(document.getElementById('branch').value);
            data.push(document.getElementById('campus').value);
            data.push(document.getElementById('semester').value);
            data.push(document.getElementById('regulation').value);
            return data;
        }
    });
}

function parsevalue(htmlString) {
    try {
        var inputElement = htmlString.querySelector('input');
        if (inputElement) {
            return inputElement.value;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

function getsubjectdata() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: getHTMLData,
            }, (injectionResults) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message);
                } else {
                    resolve(injectionResults[0].result);
                }
            });
        });
  
        function getHTMLData() {
            var data = [];
            var table = document.getElementById("subjects");
            for (var i = 0, row; row = table.rows[i]; i++) {
                var rowdata = []
                for (var j = 0, col; col = row.cells[j]; j++) {
                    rowdata.push(col.innerText);
                }
                data.push(rowdata);
            }
            return data;
        }
    });
}

function calculatesgpa() {
    var table = document.getElementById("sgpatable");
    var lettertograde = {'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'U': 0, 'RA': 0, 'SA': 0, '-': 0, '': 0};
    var omitfail = getCookie('omitfail') === "true" ? true : false;
    var result = 0.0;
    var credits = 0.0;
    for (var i = 1, row; row = table.rows[i]; i++) {
        if (lettertograde.hasOwnProperty(parsevalue(row.cells[2]))) {
            if (((lettertograde[parsevalue(row.cells[2])] == 'U') || (lettertograde[parsevalue(row.cells[2])] == 'RA') || (lettertograde[parsevalue(row.cells[2])] == 'SA')) && (omitfail == true)) {
                result += 0;
                credits += 0;
            } else {
                result += lettertograde[parsevalue(row.cells[2])] * parseFloat(parsevalue(row.cells[3]));
                credits += parseFloat(parsevalue(row.cells[3]));
            }
        } else {
            result += 0;
            credits += 0;
        }
    }
    if (credits > 0) {
        result = (result / credits).toPrecision(parseInt((getCookie('precision'))));
    } else {
        result = 0.0;
    }
}

function calculatecgpa() {
    var cgpa = 0.0;
    var count = 0;
    for (var i = 1; i < 11; i++) {
        var gpa = getCookie(i.toString());
        if ((gpa == '') || (gpa == null)) {
            
        } else {
            cgpa += parseFloat(gpa);
            count += 1;
        }
    }
    cgpa = (cgpa / count).toPrecision(parseInt((getCookie('precision'))));
    return cgpa;
}

document.addEventListener("DOMContentLoaded", function () {

    const outersite = 'https://acoe.annauniv.edu/sems/login/student';
    const dashboardsite = 'https://acoe.annauniv.edu/sems/student/dashboard';
    const markssite = 'https://acoe.annauniv.edu/sems/student/mark';
    
    function openTab(tab) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        var tabElement = document.getElementById(tab);
        if (tabElement) {
            tabElement.style.display = "block";

            var buttonElement = document.getElementById(tab + "-button");
            if (buttonElement) {
                buttonElement.classList.add("active");
            }
        }
    }

    var sgpaButton = document.getElementById("sgpa-button");
    if (sgpaButton) {
        sgpaButton.addEventListener("click", function () {
            openTab("sgpa");
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var currentWebsite = tabs[0].url;
                if (currentWebsite == markssite) {
                    var insb = `
<h3 style='color: white;' id='rollnumber'></h3>
<h3 style='color: white;' id='name'></h3>
<h3 style='color: white;' id='branch'></h3>
<h3 style='color: white;' id='campus'></h3>
<h3 style='color: white;' id='semesternumber'></h3>
<h3 style='color: white; text-align: center; font-size: x-large;' id='semesterfinalgrade'></h3> 
<hr>
<table id='sgpatable' border='1'>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Grade</th>
    <th>Credits</th>
  </tr>
</table>
<hr><br>
<button id="storesgpa">Store SGPA</button>
<p style="text-align:center; color: white;" id="alert"></p>
                    `
                    document.getElementById("sgpa-main").innerHTML = insb;
                    getuserdata().then((data) => {
                        document.getElementById("rollnumber").innerHTML = 'Roll Number: ' + data[0];
                        document.getElementById("name").innerHTML = 'Name: ' + data[1];
                        document.getElementById("branch").innerHTML = 'Branch: ' + data[2];
                        document.getElementById("campus").innerHTML = 'Campus: ' + data[3];
                        document.getElementById("semesternumber").innerHTML = 'Semester: ' + data[4];
                    }).catch((error) => {
                        console.error(error);
                        document.getElementById("rollnumber").innerHTML = 'Roll Number: Error';
                        document.getElementById("name").innerHTML = 'Name: Error';
                        document.getElementById("branch").innerHTML = 'Branch: Error';
                        document.getElementById("campus").innerHTML = 'Campus: Error';
                        document.getElementById("semesternumber").innerHTML = 'Semester: Error';
                    });
                    getsubjectdata().then((data) => {
                        var table = document.getElementById("sgpatable");
                        var creditsforsubject = getCookie('creditsdata');
                        try {
                            creditsforsubject = JSON.parse(creditsforsubject);
                        } catch(err) {
                            creditsforsubject = {'' : ''};
                        }
                        for (var i = 0; i < data.length; i++) {
                            var subdata = data[i];
                            var newrow = table.insertRow();
                            if ((creditsforsubject[subdata[1]] == null) || (creditsforsubject[subdata[1]] == "")) {
                                newrow.innerHTML = "<td><input type='text' disabled value='" + subdata[1] + "' /></td><td><input type='text' disabled value='" + subdata[2] + "' /></td><td><input type='text' value='" + subdata[11] + "' /></td><td><input type='number' value='3' min='0' max='10' /></td>";
                            } else {
                                newrow.innerHTML = "<td><input type='text' disabled value='" + subdata[1] + "' /></td><td><input type='text' disabled value='" + subdata[2] + "' /></td><td><input type='text' value='" + subdata[11] + "' /></td><td><input type='number' value='" + creditsforsubject[subdata[1]] + "' min='0' max='10' /></td>";
                            }
                        }
                        var lettertograde = {'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'U': 0, 'RA': 0, 'SA': 0, '-': 0, null: 0};
                        var omitfail = getCookie('omitfail') === "true" ? true : false;
                        var result = 0.0;
                        var credits = 0.0;
                        for (var i = 1, row; row = table.rows[i]; i++) {
                            var grade = parsevalue(row.cells[2]);
                            var credit = parseFloat(parsevalue(row.cells[3]));

                            if (lettertograde.hasOwnProperty(grade)) {
                                if ((['U', 'RA', 'SA'].includes(grade)) && (omitfail == true)) {
                                    result += 0;
                                    credits += 0;
                                } else {
                                    result += lettertograde[grade] * credit;
                                    credits += credit;
                                }
                            } else {
                                result += 0;
                                credits += 0;
                            }
                        }
                        if (credits > 0) {
                            result = (result / credits).toPrecision(parseInt((getCookie('precision'))));
                        } else {
                            result = 0.0;
                        }
                        document.getElementById('semesterfinalgrade').innerHTML = 'SGPA: ' + result;
                        var storesgpabutton = document.getElementById("storesgpa");
                        if (storesgpabutton) {
                            storesgpabutton.addEventListener("click", function () {
                                getuserdata().then((data) => {
                                    setCookie(data[4], result);
                                    document.getElementById('alert').innerHTML = 'SGPA Saved!';
                                }).catch((error) => {
                                    console.error(error);
                                });
                            });
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
                    var table = document.getElementById('sgpatable');
                    table.addEventListener('input', function(event) {
                        if (event.target.tagName.toLowerCase() === 'input') {
                            var inputValue = event.target.value;
                            if (inputValue == '') {
                                // Handle empty input
                            } else {
                                var lettertograde = {'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'U': 0, 'RA': 0, 'SA': 0, '-': 0, null: 0};
                                var omitfail = getCookie('omitfail') === "true" ? true : false;
                                var result = 0.0;
                                var credits = 0.0;
                                for (var i = 1, row; row = table.rows[i]; i++) {
                                    var grade = parsevalue(row.cells[2]);
                                    var credit = parseFloat(parsevalue(row.cells[3]));

                                    if (lettertograde.hasOwnProperty(grade)) {
                                        if ((['U', 'RA', 'SA'].includes(grade)) && (omitfail == true)) {
                                            result += 0;
                                            credits += 0;
                                        } else {
                                            result += lettertograde[grade] * credit;
                                            credits += credit;
                                        }
                                    } else {
                                        result += 0;
                                        credits += 0;
                                    }
                                }
                                if (credits > 0) {
                                    result = (result / credits).toPrecision(parseInt((getCookie('precision'))));
                                } else {
                                    result = 0.0;
                                }
                                document.getElementById('semesterfinalgrade').innerHTML = 'SGPA: ' + result;
                            }
                        }
                    });
                } else if (currentWebsite == outersite) {
                    document.getElementById("sgpa-main").innerHTML = "<h3 style='text-align: center; font-size:x-large; color: white;'>Please Log In > Attendance & Marks!</h3><br><hr>";
                } else if ((currentWebsite == dashboardsite) || (currentWebsite.includes('https://acoe.annauniv.edu/sems/student')) && (currentWebsite != dashboardsite) && (currentWebsite != markssite) && (currentWebsite != outersite)) {
                    document.getElementById("sgpa-main").innerHTML = '</br><h3 style="text-align: center; font-size:x-large; color: white;">Error: Head To The Attendance & Marks Tab!</h3>';
                    document.getElementById("sgpa-main").innerHTML += '<button id="acoesemsbutton">Attendance & Marks</button>';
                    document.getElementById("sgpa-main").innerHTML += '</br><hr>';
                    var acoesemsbutton = document.getElementById("acoesemsbutton");
                    if (acoesemsbutton) {
                        acoesemsbutton.addEventListener("click", function () {
                            switchtomarkstab();
                        });
                    }
                } else {
                    document.getElementById("sgpa-main").innerHTML = '</br><h3 style="text-align: center; font-size:x-large; color: white;">Error: Please Click The Button To Open ACOE Sems!</h3>';
                    document.getElementById("sgpa-main").innerHTML += '<button id="acoesemsbutton">Go To ACOE Sems</button>';
                    document.getElementById("sgpa-main").innerHTML += '</br><hr>';
                    var acoesemsbutton = document.getElementById("acoesemsbutton");
                    if (acoesemsbutton) {
                        acoesemsbutton.addEventListener("click", function () {
                            switchtoacoetab();
                        });
                    }
                }
            });
        });
    }

    var cgpabutton = document.getElementById("cgpa-button");
    if (cgpabutton) {
        cgpabutton.addEventListener("click", function () {
            openTab("cgpa");
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var currentWebsite = tabs[0].url;
                if (currentWebsite == markssite) {
                    var insb = `
<h3 style='color: white;' id='rollnumberc'></h3>
<h3 style='color: white;' id='namec'></h3>
<h3 style='color: white;' id='branchc'></h3>
<h3 style='color: white;' id='campusc'></h3>
<h3 style='color: white;' id='semesternumberc'></h3>
<h3 style='color: white; text-align: center; font-size: x-large;' id='cgpafinalgrade'></h3> 
<hr>
<table id='cgpatable' border='1' style='margin-left: auto; margin-right:auto;'>
  <tr>
    <th>Semester</th>
    <th>GPA</th>
  </tr>
</table>
<hr><br>
<p style="text-align:center; color: white;" id="alertc">Note: Updating a Value Stores It.</p>
                    `
                    document.getElementById("cgpa-main").innerHTML = insb;
                    getuserdata().then((data) => {
                        document.getElementById("rollnumberc").innerHTML = 'Roll Number: ' + data[0];
                        document.getElementById("namec").innerHTML = 'Name: ' + data[1];
                        document.getElementById("branchc").innerHTML = 'Branch: ' + data[2];
                        document.getElementById("campusc").innerHTML = 'Campus: ' + data[3];
                        document.getElementById("semesternumberc").innerHTML = 'Semester: ' + data[4];
                    }).catch((error) => {
                        console.error(error);
                        document.getElementById("rollnumberc").innerHTML = 'Roll Number: Error';
                        document.getElementById("namec").innerHTML = 'Name: Error';
                        document.getElementById("branchc").innerHTML = 'Branch: Error';
                        document.getElementById("campusc").innerHTML = 'Campus: Error';
                        document.getElementById("semesternumberc").innerHTML = 'Semester: Error';
                    });
                    var table = document.getElementById('cgpatable');
                    for (var i = 1; i < 11; i++) {
                        var newrow = table.insertRow();
                        var val = getCookie(i.toString());
                        newrow.innerHTML = "<td>" + i.toString() + "</td><td><input type='text' value='" + val + "' /></td>";
                    }
                    var result = calculatecgpa();
                    document.getElementById('cgpafinalgrade').innerHTML = 'CGPA: ' + result;
                    table.addEventListener('input', function(event) {
                        if (event.target.tagName.toLowerCase() === 'input') {
                            var inputValue = event.target.value;
                            var row = event.target.closest('tr');
                            var cellIndex = Array.from(row.cells).indexOf(event.target.closest('td'));
                            var semesterValue = row.cells[0].textContent; 
                            setCookie(semesterValue, inputValue);
                            var result = calculatecgpa();
                            document.getElementById('cgpafinalgrade').innerHTML = 'CGPA: ' + result;
                        }
                    });
                } else if (currentWebsite == outersite) {
                    document.getElementById("cgpa-main").innerHTML = "<h3 style='text-align: center; font-size:x-large; color: white;'>Please Log In > Attendance & Marks!</h3><br><hr>";
                } else if ((currentWebsite == dashboardsite) || (currentWebsite.includes('https://acoe.annauniv.edu/sems/student')) && (currentWebsite != dashboardsite) && (currentWebsite != markssite) && (currentWebsite != outersite)) {
                    document.getElementById("cgpa-main").innerHTML = '</br><h3 style="text-align: center; font-size:x-large; color: white;">Error: Head To The Attendance & Marks Tab!</h3>';
                    document.getElementById("cgpa-main").innerHTML += '<button id="acoesemsbutton">Attendance & Marks</button>';
                    document.getElementById("cgpa-main").innerHTML += '</br><hr>';
                    var acoesemsbutton = document.getElementById("acoesemsbutton");
                    if (acoesemsbutton) {
                        acoesemsbutton.addEventListener("click", function () {
                            switchtomarkstab();
                        });
                    }
                } else {
                    document.getElementById("cgpa-main").innerHTML = '</br><h3 style="text-align: center; font-size:x-large; color: white;">Error: Please Click The Button To Open ACOE Sems!</h3>';
                    document.getElementById("cgpa-main").innerHTML += '<button id="acoesemsbutton">Go To ACOE Sems</button>';
                    document.getElementById("cgpa-main").innerHTML += '</br><hr>';
                    var acoesemsbutton = document.getElementById("acoesemsbutton");
                    if (acoesemsbutton) {
                        acoesemsbutton.addEventListener("click", function () {
                            switchtoacoetab();
                        });
                    }
                }
            });
        });
    }

    var optionsbutton = document.getElementById("options-button");
    if (optionsbutton) {
        optionsbutton.addEventListener("click", function () {
            openTab("options");
            
            var precision = getCookie("precision");
            document.getElementById('numberPicker1').value = precision;

            var omitfail = getCookie("omitfail");
            if (omitfail === "true") {
                document.getElementById('omitfail1').checked = true;
            } else {
                document.getElementById('omitfail1').checked = false;
            }

            var creditsd = getCookie("creditsdata");
            document.getElementById("creditsdata").value += creditsd;

            var prec = document.getElementById("numberPicker1");
            if (prec) {
                prec.addEventListener("input", function() {
                    if (this.value > 5) {
                        document.getElementById('alertmessage').innerHTML = 'Error: Precision Cannot Be Greater Than 5!';
                    } else if (this.value < 1) {
                        document.getElementById('alertmessage').innerHTML = 'Error: Precision Cannot Be Lesser Than 1!';
                    } else {
                        setCookie('precision', this.value);
                        document.getElementById('alertmessage').innerHTML = 'Success: Precision Saved!';
                    }
                })
            }

            var omitf = document.getElementById("omitfail1");
            if (omitf) {
                omitf.addEventListener("click", function() {
                    if (omitf.checked) {
                        setCookie('omitfail', "true");
                        document.getElementById('alertmessage').innerHTML = 'Success: Switched On!';
                    } else {
                        setCookie('omitfail', "false");
                        document.getElementById('alertmessage').innerHTML = 'Success: Switched Off!';
                    }
                })
            }

            var creds = document.getElementById("creditsdata");
            if (creds) {
                creds.addEventListener("input", function() {
                    try {
                        var data = JSON.parse(document.getElementById('creditsdata').value);
                        setCookie('creditsdata', document.getElementById('creditsdata').value);
                        document.getElementById('alertmessage').innerHTML = 'Success: Data Saved!';
                    } catch {
                        //setCookie('creditsdata', document.getElementById('creditsdata').value);
                        document.getElementById('alertmessage').innerHTML = 'Alert: INVALID JSON DATA! DATA NOT SAVED!';
                    }
                })
            }
        });
    }

    var aboutButton = document.getElementById("about-button");
    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            openTab("about");
            var link = document.getElementById("ghublink");
            if (link) {
                link.addEventListener("click", function() {
                    chrome.tabs.query({}, function (tabs) {
                            chrome.tabs.create({ url: 'https://github.com/shyaaaaaaam/AU-CGPA_Calculator' });       
                    });
                })
            }
        });
    }

    checkcookie();
    document.getElementById("sgpa-button").click();
});