import React from "react";
import Card from "./Card";
import "./profiles.css";

function ProfileCards() {
  const profiles = [
    {
      image: "./images/1.jpg",
      name: "굿윌헌팅",
      intro:
        "비상한 머리와 재능을 가졌지만 어린시절의 아픔으로 인해 질풍노도의 시기를 보내는 윌의 재능을 알아본 MIT 교수는 자신의 대학 동기인 심리학 교수 숀에게 윌을 부탁한다. 윌은 심리학 교수 숀과의 만남을 통해 상처를 치유하며 점차 변화하기 시작한다.",
    },
    {
      image: "./images/2.png",
      name: "이미테이션 게임",
      intro:
        "세계 2차대전 중, 독일군은 문장을 이해할 수 없는 글자 배열로 바꾸어 무한대에 가까운 암호 조합을 만들어내는 에니그마를 사용해 소통한다. 이를 해독하기 위해 연합군은 천재 수학자 앨런 튜링을 암호 해독팀에 채용하고, 앨런은 에니그마 해독을 위해 특별한 기계를 발명한다.",
    },
    {
      image: "./images/3.jpg",
      name: "인셉션",
      intro:
        "국제적 수배자로 쫓기고 있는 특수 요원 코브는 타인의 꿈에 잠입하여 생각을 훔치는 일을 하며 숨어산다.",
    },
    {
      image: "./images/4.jpg",
      name: "인터스텔라",
      intro:
        "세계의 경제 및 정부가 완전히 붕괴되고, 과거의 잘못으로 인해 인류에게 최악의 미래가 다가온다. 광활한 우주로 떠나 인간이 살 수 있는 행성을 찾으러 나선 우주인들의 감동적이고 위대한 여정이 시작된다.",
    },
  ];

  return (
    <div className="profile">
      <h1>영화 소개</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <Card key={index}>
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              className="profile-image"
            />
            <h1>{profile.name}</h1>
            <p>{profile.intro}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
