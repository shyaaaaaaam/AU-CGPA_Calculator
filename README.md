# AU-CGPA_Calculator
This is a JavaScript programmed Google Extension to calculate CGPA Directly From The ACOE Website.<br />

You May Directly Add The Extension To Your Chrome Browser Via `chrome://extensions/` >> `Load Unpacked` >> `Select AU-CGPA-Calculator`<br /><br />

#IMPORTANT NOTE
This Extension Currently Has A Good Portion Of Subjects Added To The Database, However MANY SUBJECTS WILL BE MISSING, You may update it in `Options` >> `Data` in a JSON `Key[str]:Value[int]` Format.<br />
If You Have A List Of The Updated Subjects And Credits, Feel Free To Pull A Request With The Updated Subjects.
- - - -

# Calculation Method: <br />
# GPA
During each semester, the list of courses registered and the grades scored in each course are used to compute the Grade Point Average (GPA). GPA is the ratio of the sum of the products of the number of credits of courses registered and the grade points corresponding to the grades scored in those courses, taken for all the courses, to the sum of the number of credits of all the courses in the semester.

<img width="155" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/792be0db-6276-45d2-ba7a-86d69d4624ea">

Where Ci - is the Credits assigned to the course
 - GPi : is the grade point corresponding to the letter grade obtained for each course
 - n : is number of all Courses successfully cleared during the particular semester in the case of GPA and during all the semesters in the case of CGPA.
CGPA will be calculated in a similar manner, considering all the courses enrolled from first semester. "RA", "SA" and "U" grades will be excluded for calculating GPA and CGPA.

# Weighted CGPA
The “overall” GPA (often called CGPA) isn’t the simple arithmetic mean of each semester’s SGPA. It’s a credit-weighted average:
![image](https://github.com/user-attachments/assets/124f2888-c35b-42b5-acc2-0e6036fd5ada)

Because different semesters usually carry different credit loads, the semester with more credits pulls the CGPA closer to its own SGPA.

# Target CGPA

| Symbol | What it is                                          | How to get it                                                   |
| ------ | --------------------------------------------------- | --------------------------------------------------------------- |
| Gc     | **Current CGPA**                                    | Already Calculated By Extension                                 |
| Gt     | **Target CGPA**                                     | -                                                               |
| Cc     | **Total credits completed so far**                  | Add Up The Credits For The Completed Semesters                  |
| Cr     | **Credits Remaining Upto Graduation**               | Add Up The Credits For The Remaining Semesters                  |

Quality Points You Are Targetting (Qt) = Gt * (Cc + Cr)
Quality Points So Far (Qc) = Gc * Cc
Quality Points Needed To Earn (Qr) = Qt - Qc
Average GPA Required In The Remaining Semesters (Gr) = Qr / Cr
- - - -

# Grades:
Grade  | Points
------ | -------------
O      | 10
S      | 10
A+     | 9
A      | 8
B+     | 7
B      | 6
C      | 5
U      | 0 Arrear
SA     | 0 Shortage Of Attendance
RA     | 0 Re-Appear
-`     | Withdrawn

- - - -

# Screenshots:
<img width="334" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/422fedee-7254-4ffe-90d9-163247ad80a1">
<img width="335" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/0d51520d-a1f8-45cd-a7ff-1a26798bb16a">
<img width="344" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/bd32cbda-c73f-4698-b18b-2d8ad2ad3faf">
<img width="341" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/6f17f22a-35f2-4c80-a700-aaa4a499400b">
<img width="341" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/ab915907-af1d-4056-8bd1-c04319868ef6">
<img width="341" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/b802afd9-3952-495a-b10f-4e81edb1add9">
<img width="340" alt="image" src="https://github.com/shyaaaaaaam/AU-CGPA_Calculator/assets/66993859/774c19af-c2ba-43cb-ab85-8b9d5a18b142">
