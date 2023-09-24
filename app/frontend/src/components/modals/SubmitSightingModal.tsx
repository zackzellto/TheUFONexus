import React from 'react'

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
    image?: string;
    video?: string;
    
    

const SubmitSightingModal = (props: Props) => {
  return (
    <div>SubmitSightingModal</div>
  )
}

export default SubmitSightingModal