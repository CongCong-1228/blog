import React, {ReactElement} from "react";
import {
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaGithub,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";
import {SiFlutter, SiPython} from "react-icons/si";

export default function AboutPage(): ReactElement {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="max-w-2xl bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                    About Me
                </h1>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    I am a frontend engineer passionate about building modern web
                    applications.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    My main tech stack includes:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6 mb-6">
                    <li className="flex flex-col items-center bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow">
                        <FaReact className="text-blue-500 text-5xl mb-2"/>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
              React
            </span>
                    </li>
                    <li className="flex flex-col items-center bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow">
                        <FaVuejs className="text-green-500 text-5xl mb-2"/>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
              Vue
            </span>
                    </li>
                    <li className="flex flex-col items-center bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow">
                        <SiFlutter className="text-blue-400 text-5xl mb-2"/>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
              Flutter
            </span>
                    </li>
                    <li className="flex flex-col items-center bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow">
                        <FaNodeJs className="text-green-600 text-5xl mb-2"/>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
              Node.js
            </span>
                    </li>
                    <li className="flex flex-col items-center bg-gray-50 dark:bg-gray-600 p-4 rounded-lg shadow">
                        <SiPython className="text-yellow-500 text-5xl mb-2"/>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
              Python
            </span>
                    </li>
                </ul>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Contact Me
                </h2>
                <ul className="flex flex-col sm:flex-row justify-around items-center gap-4">
                    <li className="flex items-center gap-2">
                        <FaGithub className="text-gray-800 dark:text-white text-2xl"/>
                        <a
                            href="https://github.com/CongCong-1228"
                            className="text-lg text-gray-800 dark:text-white"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-800 dark:text-white text-2xl"/>
                        <a
                            href="https://mail.163.com/"
                            className="text-lg text-gray-800 dark:text-white"
                            target="_blank"
                        >
                            fivesun1228@163.com
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhone className="text-gray-800 dark:text-white text-2xl"/>
                        <span className="text-lg text-gray-800 dark:text-white">
              +86 15560211950
            </span>
                    </li>
                </ul>
            </div>
        </div>
    ) as React.ReactElement;
}
