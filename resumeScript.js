/*
    const Personal Info strings to be populated into Resume
*/
const _NAME = 'Ramandeep Singh';
const _SPECIALTY = 'Software Engineer'
const _ADDRESS = ['32-45-73' + 'rd'.sup() + ' Street \n' +
                  '2' + 'nd'.sup() + ' Floor \n East Elmhurst, New York 11370'
                 ];
const _EMAIL = 'ha7ka1@gmail.com';
const PHONE_NUMBER = '718-971-4215';
const _LINKEDIN = 'www.linkedin.com/in/r-singh92';
const _GITHUB = 'https://github.com/ha7ka';


/*
    const string for the Objective statement
*/
const _OBJECTIVE = 'Looking for Entry level / Intermediate position as a professional programmer. Enjoy\'s working in an environment with lots to learn and dynamic programing. Enjoys programing in JavaScript, C++, and SQL .';

/*
    Object that contains info on work experience

    Make sure the last one is job responsibilities as that has to be handled different as the rest
*/

const WORK_EXPERIENCE = 
{
    'LineUpApp Intern' : {
                            'Dates' : 'Aug 18, 2018 - Dec 31, 2018',
                            'Company Name' : 'LineUpApp',
                            'Position' : 'Intern',
                            'Job Responsibilities' : [
                                                        'Manage AWS Infrastructure',
                                                        'Design and Maintain MySQl Database',
                                                        'Write MySQL Stored Procedures for use by the Backend'
                                                    ]
                        },

    'LineUpApp Job' : {
                            'Dates' : 'Jan 1, 2019 - Present',                        
                            'Company Name' : 'LineUpApp',
                            'Position' : 'Software Developer',
                            'Job Responsibilities' : [
                                                        'Help Manage AWS Infrastructure',
                                                        'Design and Maintain MySQl Database',
                                                        'Write MySQL Stored Procedures for use by the Backend',
                                                        'Write and maintain Backend Endpoints using NodeJs, WebSockets, and Express Technologies'
                                                    ]
                            }
};
const _SKILLS = 
{
    'Languages' : [
                    'C++','Java','JavaScript','MySQL', 'T-SQL'
                  ],
    'Web Technologies' : [
                            'NodeJS' , 'Express', 'Socket.io'
                         ]
};

const _EDUCATION = 
{
    'Queens College' :  {
                            'Dates' : 'Spring 2015 - Spring 2019',
                            'Degree' : 'Computer Science (B.S)'
                        }
};
/*
  calls functions to fill our Resume Page with information Declared in const above
*/
window.onload = function()
{
    populateNameHeader('name','job_specialty', _NAME , _SPECIALTY);
    populatePersonalInfo('personal_info_title', 'personal_info_list', 
    {
        email :_EMAIL,
        phone_number : PHONE_NUMBER,
        git : _GITHUB, 
        linked_in :_LINKEDIN,
        address : _ADDRESS ,
    });
    populateSkills('skills_info_title', 'skills_info_list', _SKILLS);
    populateObjective('objective_title','objective_info' , _OBJECTIVE);
    populateWorkExperience('work_experience_title', 'work_experience_list', WORK_EXPERIENCE);
    populateEducation('education_info_title', 'education_info_list', _EDUCATION);
    
} 

/*
    ul insert Helper Function
*/
function addItem(list , item_id , data)
{
    let list_item = document.createElement("li");
    list_item.setAttribute("id", item_id);
    list_item.innerHTML = data;
    list.appendChild(list_item);
}
/*
    Fill the Header of the Page
*/
function populateNameHeader(name_id, specialty_id , name_data, specialty_data)
{
    document.getElementById(name_id).innerHTML = name_data;
    document.getElementById(specialty_id).innerHTML = specialty_data;
}

/*
    Fill the Personal Info Box with declared Personal consts
*/
function populatePersonalInfo(_title , list_name , data)
{
    document.getElementById(_title).innerHTML = 'Personal Info';
    let personal_info_list = document.getElementById(list_name);

    personal_info_list.innerHTML = '';

    let keys  = Object.keys(data);

    for (i in keys)
    {
        addItem(personal_info_list , keys[i] + '_id', data[keys[i]]);
    }


}
/*
    Populate Skills
*/
function populateSkills(_title, list_name, data)
{
    document.getElementById(_title).innerHTML = 'Skills';

    let skills_info_list = document.getElementById(list_name);

    skills_info_list.innerHTML = '';

    let keys = Object.keys(data);

    for (i in keys)
    {
        addItem(skills_info_list, 'skill_cat_' + keys[i] , keys[i]);
        let inner_list = document.createElement('ul');
        let inner_data = data[keys[i]];

        for(j in inner_data)
            addItem(inner_list , keys[i] + '_'  + j, inner_data[j]);
        skills_info_list.appendChild(inner_list);
    }
}
/*
    Fill the Objective Box with declared Objective statement
*/
function populateObjective(_title , _info , objective)
{
    document.getElementById(_title).innerHTML = 'Objective';
    document.getElementById(_info).innerHTML = objective;
}

/*
    Work Experience
    Prams
        list_name : html id for the list we are editing
        _title : html id for the Heading for this section of the resume
*/
function populateWorkExperience(_title, list_name , data)
{
    document.getElementById(_title).innerHTML = 'Work Experience';
    let work_experience_list = document.getElementById(list_name);
    /*
        clean list
    */
    work_experience_list.innerHTML = '';

    let keys = Object.keys(data);

    for(i in keys)
    {
        addItem(work_experience_list , 'work_exp_' + keys[i], keys[i])
        let inner_list = document.createElement('ul');
        let inner_data = data[keys[i]];
        let inner_keys = Object.keys(inner_data)

        for (let j = 0; j < inner_keys.length - 2; ++j)
            addItem(inner_list, inner_keys[j], inner_data[inner_keys[j]]);
        let responsibilities = inner_data[inner_keys[inner_keys.length - 1]];
        let responsibilities_list = document.createElement('ul');
        for(let j = 0; j < responsibilities.length; ++j)
            addItem(responsibilities_list , 'responsibilities_' + j , responsibilities[j]);
        inner_list.appendChild(responsibilities_list);
        work_experience_list.appendChild(inner_list);
    }
}


/*
    Populate Education
*/
function populateEducation(_title, list_name, data)
{
    document.getElementById(_title).innerHTML = 'Education';

    let education_info_list = document.getElementById(list_name);
    /*
        Empty table and enter info
    */
    education_info_list.innerHTML = '';

    let keys = Object.keys(data);

    for(let i in keys)
    {
        addItem(education_info_list, 'edu_title_' + keys[i] , keys[i]);
        let inner_list = document.createElement('ul');
        let inner_data = data[keys[i]];

        for(j in inner_data)
            addItem(inner_list , keys[i] + '_'  + j, inner_data[j]);
        education_info_list.appendChild(inner_list);
    }
}

