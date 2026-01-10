import React from "react";
import {
  FaUsers,
  FaFlask,
  FaTrophy,
  FaMusic,
  FaUserGraduate,
  FaPalette,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const eventsData = [
  {
    day: "25",
    month: "MAR",
    title: "Parent-Teacher Conference",
    time: "2:00 PM - 6:00 PM",
    location: "Main Auditorium",
    icon: <FaUsers />,
    color: "bg-blue-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-blue-500 to-blue-700 transition-all duration-1000 ",
  },
  {
    day: "28",
    month: "MAR",
    title: "Science Fair Exhibition",
    time: "9:00 AM - 4:00 PM",
    location: "STEM Lab",
    icon: <FaFlask />,
    color: "bg-purple-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-purple-500 to-purple-700 transition-all duration-1000 ",
  },
  {
    day: "02",
    month: "APR",
    title: "Spring Sports Tournament",
    time: "8:00 AM - 5:00 PM",
    location: "Athletic Field",
    icon: <FaTrophy />,
    color: "bg-orange-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-orange-500 to-orange-700 transition-all duration-1000 ",
  },
  {
    day: "05",
    month: "APR",
    title: "Music Concert",
    time: "6:00 PM - 8:00 PM",
    location: "Theater Hall",
    icon: <FaMusic />,
    color: "bg-teal-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-teal-500 to-teal-700 transition-all duration-1000 ",
  },
  {
    day: "10",
    month: "APR",
    title: "College Fair",
    time: "10:00 AM - 3:00 PM",
    location: "Gymnasium",
    icon: <FaUserGraduate />,
    color: "bg-green-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-green-500 to-green-700 transition-all duration-1000 ",
  },
  {
    day: "15",
    month: "APR",
    title: "Art Exhibition Opening",
    time: "5:00 PM - 7:00 PM",
    location: "Art Gallery",
    icon: <FaPalette />,
    color: "bg-pink-600",
    colorRadial:
      "bg-radial-[at_25%_25%] from-pink-500 to-pink-700 transition-all duration-1000 ",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-left" className="section_heading">
            Upcoming Events
          </h2>
          <p data-aos="fade-right" className="section_sub_heading">
            Mark your calendar for these exciting events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Header Row: Date and Icon */}
              <div className="flex items-start  gap-3">
                {/* Date Badge */}
                <div
                  className={`${event.colorRadial} text-white w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg transform -translate-y-2 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-xl font-black leading-none">
                    {event.day}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
                    {event.month}
                  </span>
                </div>

                {/* Category Icon */}
                <div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${event.color} text-gray-50 text-xl shadow-md transition-transform duration-500  group-hover:scale-110`}
                  >
                    {event.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mt-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                      {event.title}
                    </h3>

                    {/* Event Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaClock className="text-teal-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaMapMarkerAlt className="text-teal-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              {/*  <button className="w-full mt-6 py-3 bg-teal-600 text-white font-bold text-sm rounded-xl hover:bg-teal-700 transition-all cursor-pointer">
                Add to Calendar
              </button> */}
              <button
                className="w-full mt-6 py-3 text-white font-bold text-sm rounded-xl bg-radial-[at_25%_25%] from-teal-500 to-teal-600
              hover:bg-radial-[at_25%_25%] hover:from-teal-700 hover:to-teal-600 transition-colors duration-1000 cursor-pointer"
              >
                Add to Calendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
