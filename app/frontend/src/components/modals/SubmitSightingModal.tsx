import React, { useState, ChangeEvent } from "react";
import Select from "react-select";
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";

interface SightingModalProps {
  firstName: string;
  lastName: string;
  date: string;
  time: string;
  location: string;
  witnesses: string;
  description: string;
  behavior: string;
  duration: string;
  shape: string;
  color: string;
  sound: string;
  distance: string;
  altitude?: string;
  image?: File | null;
  video?: File | null;
}

const timeZones = [
  { value: "UTC-12:00", label: "UTC-12:00" },
  { value: "UTC-11:00", label: "UTC-11:00" },
  { value: "UTC-10:00", label: "UTC-10:00" },
  { value: "UTC-09:00", label: "UTC-09:00" },
  { value: "UTC-08:00", label: "UTC-08:00" },
  { value: "UTC-07:00", label: "UTC-07:00" },
  { value: "UTC-06:00", label: "UTC-06:00" },
  { value: "UTC-05:00", label: "UTC-05:00" },
  { value: "UTC-04:00", label: "UTC-04:00" },
  { value: "UTC-03:00", label: "UTC-03:00" },
  { value: "UTC-02:00", label: "UTC-02:00" },
  { value: "UTC-01:00", label: "UTC-01:00" },
  { value: "UTC+00:00", label: "UTC+00:00" },
  { value: "UTC+01:00", label: "UTC+01:00" },
  { value: "UTC+02:00", label: "UTC+02:00" },
  { value: "UTC+03:00", label: "UTC+03:00" },
  { value: "UTC+04:00", label: "UTC+04:00" },
  { value: "UTC+05:00", label: "UTC+05:00" },
  { value: "UTC+06:00", label: "UTC+06:00" },
  { value: "UTC+07:00", label: "UTC+07:00" },
  { value: "UTC+08:00", label: "UTC+08:00" },
  { value: "UTC+09:00", label: "UTC+09:00" },
  { value: "UTC+10:00", label: "UTC+10:00" },
  { value: "UTC+11:00", label: "UTC+11:00" },
  { value: "UTC+12:00", label: "UTC+12:00" },
];

const SubmitSightingModal: React.FC<SightingModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState<any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const daysArray = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <button onClick={closeModal} className="float-right">
              Close Modal
            </button>
            <h1 className="text-2xl mb-4">Submit a Sighting</h1>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysArray.map((date) => (
                <button
                  key={date.toString()}
                  onClick={() => handleDateClick(date)}
                  className={`p-2 border rounded ${
                    selectedDate &&
                    format(selectedDate, "dd") === format(date, "dd")
                      ? "bg-blue-200"
                      : ""
                  }`}
                >
                  {format(date, "dd")}
                </button>
              ))}
            </div>

            <Select
              options={timeZones}
              value={selectedTimeZone}
              onChange={(selectedOption) => setSelectedTimeZone(selectedOption)}
              className="mb-4"
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 p-2 border rounded"
                onChange={(e) => handleFileChange(e, setImageFile)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Upload Video
              </label>
              <input
                type="file"
                accept="video/*"
                className="mt-1 p-2 border rounded"
                onChange={(e) => handleFileChange(e, setVideoFile)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitSightingModal;
