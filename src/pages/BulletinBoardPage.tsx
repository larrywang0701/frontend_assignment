import React, { useState } from 'react';
import BulletinBoardItem from '../components/BulletinBoardItem';
import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';

const bulletinData = [
  {
    title: "From our friends at the Yale Center for Environmental Justice",
    content: `The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of “Environmental Joy.” The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy. Guided by the notion that the ultimate goal of most environmental and climate work is to alleviate suffering and increase wellbeing, Environmental Joy will explore and celebrate the diverse ways that environmental justice achieves this goal.

One facet of the conference programming we hope to organize is a juried art show soliciting works from artists around the world on the theme of Environmental Joy to be showcased in an exhibition during the conference. We are currently seeking any interested students or faculty who would be interested in supporting the planning and execution of this call for art. If you’re interested in learning more about the opportunity, please contact Julia Simon at julia.simon@yale.edu.`
  },
  {
    title: "Faculty/Alumni: Post Your Art Apprenticeship/Internship Opportunities for Undergraduates",
    content: `The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor. Which Opportunities are Eligible? Must be at least 30 hours/week, for at least 8-weeks over the summer months. Those 8-weeks do not have to be continuous if the mentoring Arts Practitioner agrees on a different schedule. The time commitment need not all be in direct contact with the Arts Practitioner. Independent projects, tasks, research, etc. can comprise much of the experience, as long as the Arts Practitioner is checking in regularly with the student to provide oversight and career-based context. The opportunity cannot be with a for-profit organization. The engagement for an Arts Apprenticeship should be directly with an individual Arts Practitioner and not with a company. The only exception to this would be if the company overseeing the apprenticeship were a registered non-profit organization. For more information: https://ocs.yale.edu/channels/arts-apprenticeship/ To post a job, contact: https://ocs.yale.edu/staff-list/#derek-i-webster`
  },
  {
    title: "MAPPING PUBLIC ART IN NEW HAVEN",
    content: `Hey everyone! I’ve been mapping public art in New Haven as part of my nonprofit project ArtAround and I’d love to invite you to join me, or just check it out and see what you think.

    New Haven map > https://map.artaround.org/?city=New%20Haven

    ArtAround homepage > https://artaround.org/

<3 Lindsey`
  }
];

function BulletinBoardPage(){
  return (
    <>
      <MainContainer>
        <PageHeader>Community Bulletin Board</PageHeader>
        <div className="relative flex flex-col items-center justify-center w-1/2 left-1/4 bg-gray-100 bg-opacity-30 max-h-full overflow-auto rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Community Bulletin Board</h1>
            {bulletinData.map((item, index) => (
              <BulletinBoardItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
        </div>
      </MainContainer>
    </>
  );
};

export default BulletinBoardPage;