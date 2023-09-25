import React, { useState, ChangeEvent } from "react";
import Select from "react-select";

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
  altitude: string;
  image: File | null;
  video: File | null;
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

const SubmitSightingButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<SightingModalProps>({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    location: "",
    witnesses: "",
    description: "",
    behavior: "",
    duration: "",
    shape: "",
    color: "",
    sound: "",
    distance: "",
    altitude: "",
    image: null,
    video: null,
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof SightingModalProps
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [key]: files[0],
      });
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-green-500 hover:bg-green-400 drop-shadow-xl text-white p-2 rounded-lg m-4 transform hover:scale-105 transition duration-500"
      >
        Submit Sighting
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={toggleModal} className="float-right">
              Close Modal
            </button>
            <h1 className="text-2xl mb-4">Submit a Sighting</h1>

            <form>
              {Object.keys(formData).map((key) => {
                if (key === "image" || key === "video") {
                  return (
                    <input
                      key={key}
                      type="file"
                      name={key}
                      onChange={(e) =>
                        handleFileChange(e, key as keyof SightingModalProps)
                      }
                      className="mb-4 p-2 border rounded"
                    />
                  );
                }
                return (
                  <input
                    key={key}
                    type="text"
                    name={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={(formData as any)[key]}
                    onChange={handleInputChange}
                    className="mb-4 p-2 border rounded"
                  />
                );
              })}
              <Select options={timeZones} className="mb-4" />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitSightingButton;
