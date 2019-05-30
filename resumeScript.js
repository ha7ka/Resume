/*
    const Personal Info strings to be populated into Resume
*/
const _NAME = 'Ramandeep Singh';
const _ADDRESS = ['32-45-73' + 'rd'.sup() + ' Street ' +
                  '2' + 'nd'.sup() + ' Floor',           
                  'East Elmhurst, New York 11370'
                 ];
const _EMAIL = 'ha7ka1@gmail.com';
const _PHONE_NUMBER = '718-971-4215';
const _LINKEDIN = 'www.linkedin.com/in/r-singh92';
const _GITHUB = 'https://github.com/ha7ka';


/*
    const stiring for the Objective statement
*/
const _OBJECTIVE_STATEMENT = 'Looking for Entry level / Intermediate postion as a professional programmer. Enjoy\'s working in an envoirment with lots to learn and dynamic programing. Enjoys programing in C++, SQL , Backend JS.';

/*
    Object that contains info on work exprience
*/

const WORK_EXPERENCE = 
{
    'Line_Up_App_Intern' : {
                            'Dates Worked' : 'Aug 18, 2018 - Dec 31, 2018',
                            'Company Name' : 'LineUpApp',
                            'Postion' : 'Intern',
                            'Job Responsibilites' : [
                                                    'Manage AWS Infastructure',
                                                    'Design and Maintain MySQl Database',
                                                    'Write MySQL Stored Procedures for use by the Backend'
                                                    ]
                        },

    'Line_Up_App_Job' : {
                            'Dates Worked' : 'Jan 1, 2019 - Present',                        
                            'Company Name' : 'LineUpApp',
                            'Postion' : 'Software Developer',
                            'Job Responsibilites' : [
                                                    'Manage AWS Infastructure',
                                                    'Design and Maintain MySQl Database',
                                                    'Write MySQL Stored Procedures for use by the Backend',
                                                    'Write and maintiain Backend Endpoints using NodeJs, WebSockets, Express Technologies'
                                                ]
                            }
};
const _SKILLS = 
{
    'Languages' : [
                    'C++','Java','JavaScript','MySQL', 'TSQL'
                  ],
    'Web Techonlogies' : [
                            'NodeJS' , 'Express', 'Socket.io'
                         ]
};

const _EDUCATION = 
{
    'Queens College' :  {
                            'Dates Attended' : 'Spring 2015 - Spring 2019',
                            'Degree' : 'Computer Science (B.S)'
                        }
};
/*
  calls functions to fill our Resume Page with information Declared in const above
*/
window.onload = function()
{
    populatePersonalInfo();
    populateObjective();
    populateWorkExperience();
    populateEducation();
    populateSkills();
} 

/*
    Fill the Personal Info Box with declared Personal consts
*/
function populatePersonalInfo()
{
    document.getElementById('personal_info_title').innerHTML = 'Personal Info';
    document.getElementById('name').innerHTML = _NAME;
    document.getElementById('job_speciality').innerHTML = 'Software Engineer';
    let personal_info_list = document.getElementById('Personal_Info_List');
    /*
        Empty list and enter info
    */
   personal_info_list.innerHTML = '';
    
    for(let i in _ADDRESS)
    {
        let list_item = document.createElement("LI");
        list_item.innerHTML = _ADDRESS[i];
        list_item.id = 'personal_info_item_'+ i;
        personal_info_list.appendChild(list_item);
    }

    /*
        Email
    */

    let list_item = document.createElement("LI");
    list_item.innerHTML = _EMAIL;
    list_item.id = 'personal_info_item_email';
    personal_info_list.appendChild(list_item);
    /*
        Phone Number
    */

    list_item = document.createElement("LI");
    list_item.innerHTML = _PHONE_NUMBER;
    list_item.id = 'personal_info_item_phone';
    personal_info_list.appendChild(list_item);

    /*
        Linked In
    */
    list_item = document.createElement("LI");
    list_item.innerHTML = _LINKEDIN;
    list_item.id = 'personal_info_item_LinkedIN';
    personal_info_list.appendChild(list_item);

    /*
        Git Hub
    */
    list_item = document.createElement("LI");
    list_item.innerHTML = _GITHUB;
    list_item.id = 'personal_info_item_phone';
    personal_info_list.appendChild(list_item);


}
/*
    Fill the Objective Box with declared Objective statment
*/
function populateObjective()
{
    document.getElementById('objective_title').innerHTML = 'Objective';
    document.getElementById('objective_info').innerHTML = _OBJECTIVE_STATEMENT;
}

/*
    Work Experieance
*/
function populateWorkExperience()
{
    document.getElementById('work_experience_title').innerHTML = 'Work Exprience';
    let work_experience_table = document.getElementById('work_experience_table');
    work_experience_table.innerHTML = '';
    let k = 0;
    for(let i in WORK_EXPERENCE)
    {
        let work_expreance_row = work_experience_table.insertRow();
        let jobsTable = document.createElement("TABLE");
        let tableid = 'jobs_table_' + k;
        work_expreance_row.id = tableid;
        jobsTable.innerHTML = '';
        let p = 0 ;
        for(let j = 0; j < Object.keys(WORK_EXPERENCE[i]).length; ++j)
        {
            let jobs_table_row = jobsTable.insertRow();
            jobs_table_row.id = 'job_name_'+ p;
            let key = Object.keys(WORK_EXPERENCE[i])[j];
            jobs_table_row.insertCell().innerHTML = key+ ' : ' + WORK_EXPERENCE[i][key];
            ++p;
        }
        work_expreance_row.appendChild(jobsTable);
        ++k;
    }
} 
/*
    Populate Skills
*/
function populateSkills()
{
    document.getElementById('skills_info_title').innerHTML = 'Skills';

    let skills_info_table = document.getElementById('skills_info_table');
    /*
        Empty table and enter info
    */
    skills_info_table.innerHTML = '';

    for(let j = 0; j < Object.keys(_SKILLS).length; ++j)
    {
        let skills_info_cat_row = skills_info_table.insertRow();
        skills_info_cat_row.id = 'skill_catagorey_' + j + '_row'; 
        skills_info_cat_row.innerHTML = Object.keys(_SKILLS)[j];
        for(i in _SKILLS[Object.keys(_SKILLS)[j]])
        {
            let skills_info_row = skills_info_table.insertRow();
            skills_info_row.id = Object.keys(_SKILLS)[j] + '_skills_info_' + i;
            skills_info_row.innerHTML = _SKILLS[Object.keys(_SKILLS)[j]][i];
        }
    }
}

/*
    Populate Education
*/
function populateEducation()
{
    document.getElementById('education_info_title').innerHTML = 'Education';

    let education_info_table = document.getElementById('education_info_table');
    /*
        Empty table and enter info
    */
    education_info_table.innerHTML = '';
    
    let k = 0;
    for(let i in _EDUCATION)
    {
        let education_table_row = education_info_table.insertRow();
        education_table_row.id = 'school_name_'+ k;
        education_table_row.insertCell().innerHTML ='School Name: ' + i ;
        let p = 0;
        for(j in _EDUCATION[i])
        {
            let education_table_row = education_info_table.insertRow();
            education_table_row.id = 'school_info_'+ p;
            education_table_row.insertCell().innerHTML = j + ' : ' + _EDUCATION[i][j];
            ++p;
        }
        ++k;
    }
}