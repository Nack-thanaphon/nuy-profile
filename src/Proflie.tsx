import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  // FaAward,
  // FaTools,
  // FaLinkedin,
  // FaDownload,
  FaUserAlt,
  FaLightbulb,
  FaFileDownload,
  FaAward,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactInfo {
  email: string;
  phone: string;
}
interface Skill {

  category: string;
  items: {
    name: string;
    level: number;
  }[]
}

interface Award {
  title: string;
  date: string;
  organization: string;
}

interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

interface Content {
  name: string;
  address: string;
  dob: string;
  contact: ContactInfo;
  education: {
    name: string
  }[];
  skills: Skill[];
  languages: { name: string; level: string }[];
  hobbies: string[];
  abilities: string[];
  experience: JobExperience[];
  portfolio: PortfolioItem[];
  awards: Award[];
}

const textContent: Record<string, Content> = {
  en: {
    name: "Phiengpen Panjan",
    address: "Bangkungsri, Bangkoknoi, Bangkok 10700",
    dob: "12 July 1992",
    contact: {
      email: "porphanpen@gmail.com",
      phone: "085-664-6929",
    },
    education: [
      {
        name: "Bachelor of Arts (Religious Studies), Mahidol University (2011-2014)"
      },
      {
        name: "English-French Program, Satri Wat Rakhang School (2006-2011)"
      }
    ],
    skills: [
      {
        category: "Soft Skills",
        items: [
          { name: "Critical Thinking & Analysis", level: 90 },
          { name: "Problem Solving", level: 85 },
          { name: "Team Collaboration", level: 90 },
          { name: "Communication", level: 85 }
        ]
      },
      {
        category: "Technical Skills",
        items: [
          { name: "Microsoft Office Suite", level: 90 },
          { name: "Canva", level: 85 },
          { name: "Google Apps", level: 85 },
          { name: "Photoshop", level: 75 }
        ]
      },
      {
        category: "Management",
        items: [
          { name: "Project Management", level: 85 },
          { name: "Event Planning", level: 80 },
          { name: "Time Management", level: 85 }
        ]
      }
    ],
    awards: [
      {
        title: "Development of English Skills with Participation of Students",
        date: "2019",
        organization: "Faculty of Nursing, Mahidol University"
      },
      {
        title: "Excellence in Academic Support",
        date: "2018",
        organization: "Bangkok Medical Service Department"
      }
    ],
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
    hobbies: ["Green travel", "Planting trees", "Listening to music"],
    abilities: ["Teamwork", "Communication", "Creativity"],
    experience: [
      {
        title: "Educator",
        company: "Faculty of Medicine Vajira Hospital",
        location: "Bangkok",
        period: "2021-Present",
        responsibilities: [
          "Arranged timetables for pre-clinical medical students.",
          "Implemented teaching and learning processes."
        ],
      },
      {
        title: "Educator",
        company: "Faculty of Nursing, Mahidol University",
        location: "Bangkok",
        period: "2017-2021",
        responsibilities: [
          "Managed scholarships for undergraduate students.",
          "Organized the APAHL Forum 2019, an international conference.",
          "Presented award-winning research on English skills development."
        ],
      },
      {
        title: "Academic Officer",
        company: "Bangkok Medical Service Department",
        location: "Bangkok",
        period: "2015-2016",
        responsibilities: [
          "Organized computer workshops for medical personnel.",
          "Participated in WFME international medical school standards training.",
          "Managed quality assurance for the Clinical Medical Education Center."
        ],
      }
    ],
    portfolio: [
      {
        title: "Event Design",
        description: "Corporate branding and event visuals.",
        imageUrl: "/portfolio/event.png",
        link: "https://www.example.com",
      },
    ],

  },
  th: {
    name: "เพียงเพ็ญ แป้นจันทร์",
    address: "บางขุนศรี, บางกอกน้อย, กรุงเทพฯ 10700",
    dob: "12 กรกฏาคม 2535",
    contact: {
      email: "porphanpen@gmail.com",
      phone: "085-664-6929",
    },
    education: [
      {
        name: "ศิลปศาสตรบัณฑิต (ศาสนศึกษา), มหาวิทยาลัยมหิดล (2554-2557)",
      },
      {
        name: "โปรแกรมภาษาอังกฤษ-ฝรั่งเศส, โรงเรียนสตรีวัดระฆัง (2549-2554)",
      }
    ],
    skills: [
      {
        category: "ทักษะด้านอารมณ์",
        items: [
          { name: "การคิดเชิงวิพากษ์และวิเคราะห์", level: 90 },
          { name: "การแก้ปัญหา", level: 85 },
          { name: "การทำงานร่วมกับทีม", level: 90 },
          { name: "การสื่อสาร", level: 85 }
        ]
      },
      {
        category: "ทักษะทางเทคนิค",
        items: [
          { name: "Microsoft Office Suite", level: 90 },
          { name: "Canva", level: 85 },
          { name: "Google Apps", level: 85 },
          { name: "Photoshop", level: 75 }
        ]
      },
      {
        category: "การจัดการ",
        items: [
          { name: "การจัดการโครงการ", level: 85 },
          { name: "การวางแผนกิจกรรม", level: 80 },
          { name: "การบริหารเวลา", level: 85 }
        ]
      }
    ],
    awards: [
      {
        title: "การพัฒนาทักษะภาษาอังกฤษด้วยการมีส่วนร่วมของนักศึกษา",
        date: "2562",
        organization: "คณะพยาบาลศาสตร์ มหาวิทยาลัยมหิดล"
      },
      {
        title: "ความเป็นเลิศในการสนับสนุนวิชาการ",
        date: "2561",
        organization: "กรมการแพทย์กรุงเทพมหานคร"
      }
    ],
    languages: [
      { name: "ไทย", level: "ภาษาแม่" },
      { name: "อังกฤษ", level: "พูดได้คล่อง" },
    ],
    hobbies: ["การเดินทางสีเขียว", "ปลูกต้นไม้", "ฟังเพลง"],
    abilities: ["การทำงานเป็นทีม", "การสื่อสาร", "ความคิดสร้างสรรค์"],
    experience: [
      {
        title: "นักวิชาการศึกษา",
        company: "คณะแพทยศาสตร์วชิรพยาบาล",
        location: "กรุงเทพฯ",
        period: "2564-ปัจจุบัน",
        responsibilities: [
          "จัดตารางเรียนสำหรับนักศึกษาแพทย์ก่อนคลินิก",
          "ดำเนินการกระบวนการสอนและการเรียนรู้"
        ],
      },
      {
        title: "นักวิชาการศึกษา",
        company: "คณะพยาบาลศาสตร์ มหาวิทยาลัยมหิดล",
        location: "กรุงเทพฯ",
        period: "2560-2564",
        responsibilities: [
          "จัดการทุนการศึกษาสำหรับนักศึกษาระดับปริญญาตรี",
          "จัดการประชุม APAHL Forum 2019 ซึ่งเป็นการประชุมระดับนานาชาติ",
          "นำเสนอผลงานวิจัยที่ได้รับรางวัลเกี่ยวกับการพัฒนาทักษะภาษาอังกฤษ"
        ],
      }
    ],
    portfolio: [
      {
        title: "ออกแบบงานอีเวนต์",
        description: "แบรนด์ดิ้งและภาพสำหรับงานอีเวนต์",
        imageUrl: "/portfolio/event.png",
        link: "https://www.example.com",
      },
    ],
  },
};

function Profile() {
  const [language, setLanguage] = useState<"en" | "th">("th");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const content = textContent[language];

  return (
    <div className="max-w-3xl mx-auto font-sans bg-white space-y-10 py-10 p-3 rounded-lg">
      <div className="flex justify-between">
        <motion.div
          className="bg-blue-300 hover:bg-blue-400 p-2 rounded-[10px] inline-block cursor-pointer"
          animate={{
            y: [-2, 2, -2],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
          whileTap={{ scale: 0.95 }}
        >

          <motion.div className="w-fit">
            <a
              // href={language === "en" ? "/cv-en.pdf" : "/cv-th.pdf"}
              href="/PHIENGPEN_PANJAN_Resume.pdf"
              target="_blank"
              className="bg-blue-300 hover:bg-blue-400 px-3 py-1 rounded-lg flex items-center space-x-2"
            >
              <FaFileDownload size={14} />
              <span>{language === "en" ? "Download CV" : "ดาวน์โหลด CV"}</span>
            </a>
          </motion.div>
        </motion.div>
        <div className="text-right">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="text-blue-500"
          >
            {language === "en" ? "ภาษาไทย" : "English"}
          </motion.button>
        </div>
      </div>


      {/* Profile Header */}
      <div className="text-center">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{content.name}</h1>
        {/* <p className="text-gray-600 mt-2">{content.subtitle}</p> */}
        <p className="mt-2 text-gray-600">{content.address}</p>
        <b className="mt-2 text-gray-600">{content.dob}</b>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaPhone className="mr-2" />
          <a href={`tel:${content.contact.phone}`} className="text-blue-500">
            {content.contact.phone}
          </a>
        </p>

        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaEnvelope className="mr-2" />
          <a href={`mailto:${content.contact.email}`} className="text-blue-500">
            {content.contact.email}
          </a>
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaGraduationCap className="mr-2" />{" "}
          {language === "en" ? "Education" : "ประวัติการศึกษา"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.education.map((edu, index) => (
            <li key={index}>{edu.name}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaBriefcase className="mr-2" />{" "}
          {language === "en" ? "Experience" : "ประสบการณ์การทำงาน"}
        </h2>
        {content.experience.map((job, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-gray-600">
              {job.company}, {job.location} ({job.period})
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLightbulb className="mr-2" />{" "}
          {language === "en" ? "Hobbies" : "งานอดิเรก"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Abilities */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaUserAlt className="mr-2" />{" "}
          {language === "en" ? "Abilities" : "ความสามารถ"}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaTools className="mr-2" /> {language === 'en' ? 'Skills' : 'ทักษะ'}
        </h2>
        <div className="grid gap-4 mt-4">
          {content.skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li className="list-none">
                    <b className="text-gray-700">{skill.category}</b>
                  </li>
                  {skill.items.map((value) => (
                    <li>{value.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaAward className="mr-2" /> {language === 'en' ? 'Awards' : 'รางวัล'}
        </h2>
        <div className="space-y-4 mt-4">
          {content.awards.map((award, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
              <p className="text-gray-500 text-sm">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaPaintBrush className="mr-2" />
          {language === "en" ? "Portfolio Examples" : "ตัวอย่างผลงาน"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {content.portfolio.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm flex items-center mt-2"
                >
                  {language === "en" ? "View Project" : "ดูโปรเจค"}
                  <FaExternalLinkAlt size={12} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
