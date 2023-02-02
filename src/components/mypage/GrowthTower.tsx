import styled, { keyframes } from 'styled-components';

import { useAppSelector } from '@redux/hooks';
import { getCatInfoByQuery } from '@utils/character';

import Cat from '@components/character/Cat';

const GrowthTower = () => {
  const user = useAppSelector((state) => state.user.user);
  const { cat, rocket } = getCatInfoByQuery(user?.profileImg);

  return (
    <GrowthTowerLayout>
      <GrowthTowerBox>
        <BottomBox>
          <div className="light-brown-box" id="one" />
          <div className="light-brown-box" id="two" />
          <div className="light-brown-box" id="three" />
          <div className="light-brown-box" id="four" />
          <div className="light-brown-box" id="five" />
          <div className="light-brown-box" id="six" />
          <div className="light-brown-box" id="seven" />
        </BottomBox>
        <LevelOneTower>
          {user?.today.todayScore && user?.today.todayScore && user?.today.todayScore <= 600 && (
            <div className="cat" id="level-one-cat">
              <Cat type="body" catTheme={cat} rocketTheme={rocket} />
            </div>
          )}
          <div>
            <div className="stand">
              <div className="beige-box" id="thirteen" />
              <div className="beige-box" id="fourteen" />
              <div className="light-brown-box" id="fifteen" />
            </div>
            <div className="stand">
              <div className="light-brown-box" id="ten" />
              <div className="light-brown-box" id="eleven" />
              <div className="light-brown-box" id="twelve" />
            </div>
          </div>
          <div>
            <div className="dark-brown-box" id="nine" />
            <div className="dark-brown-box" id="eight" />
          </div>
        </LevelOneTower>
        {user?.today.todayScore && user?.today.todayScore > 600 && (
          <LevelTwoTower>
            {user?.today.todayScore && user?.today.todayScore <= 1200 && (
              <div className="cat" id="level-two-cat">
                <Cat type="body" catTheme={cat} rocketTheme={rocket} />
              </div>
            )}
            <div>
              <div className="stand">
                <div className="beige-box" id="twentyseven" />
                <div className="beige-box" id="twentyeight" />
                <div className="beige-box" id="twentynine" />
                <div className="light-brown-box" id="thirty" />
              </div>
              <div className="stand">
                <div className="light-brown-box" id="twentythree" />
                <div className="light-brown-box" id="twentyfour" />
                <div className="light-brown-box" id="twentyfive" />
                <div className="light-brown-box" id="twentysix" />
              </div>
            </div>
            <div className="level-two-tower-bar">
              <div className="dark-brown-box" id="twentytwo" />
              <div className="dark-brown-box" id="twentyone" />
              <div className="beige-box" id="twenty" />
              <div className="beige-box" id="nineteen" />
              <div className="beige-box" id="eighteen" />
              <div className="beige-box" id="seventeen" />
              <div className="dark-brown-box" id="sixteen" />
            </div>
          </LevelTwoTower>
        )}
        {user?.today.todayScore && user?.today.todayScore > 1200 && (
          <LevelThreeTower>
            {user?.today.todayScore && user?.today.todayScore <= 1800 && (
              <div className="cat" id="level-three-cat">
                <Cat type="body" catTheme={cat} rocketTheme={rocket} />
              </div>
            )}
            <div className="level-three-stand">
              <div className="light-brown-box" id="fiftythree" />
              <div className="stand">
                <div className="beige-box" id="fortyeight" />
                <div className="beige-box" id="fortynine" />
                <div className="beige-box" id="fifty" />
                <div className="beige-box" id="fiftyone" />
                <div className="light-brown-box" id="fiftytwo" />
              </div>
              <div className="stand">
                <div className="light-brown-box" id="fortythree" />
                <div className="light-brown-box" id="fortyfour" />
                <div className="light-brown-box" id="fortyfive" />
                <div className="light-brown-box" id="fortysix" />
                <div className="light-brown-box" id="fortyseven" />
              </div>
            </div>
            <div className="level-three-tower-bar">
              <div className="dark-brown-box" id="fortytwo" />
              <div className="dark-brown-box" id="fortyone" />
              <div className="dark-brown-box" id="forty" />
              <div className="dark-brown-box" id="thirtynine" />
              <div className="beige-box" id="thirtyeight" />
              <div className="beige-box" id="thirtyseven" />
              <div className="beige-box" id="thirtysix" />
              <div className="beige-box" id="thirtyfive" />
              <div className="beige-box" id="thirtyfour" />
              <div className="beige-box" id="thirtythree" />
              <div className="dark-brown-box" id="thirtytwo" />
              <div className="dark-brown-box" id="thirtyone" />
            </div>
          </LevelThreeTower>
        )}
        {user?.today.todayScore && user?.today.todayScore > 1800 && (
          <LevelFourTower>
            <div className="cat" id="level-four-cat">
              <Cat type="body" catTheme={cat} rocketTheme={rocket} />
            </div>
            <div className="level-four-stand">
              <div className="stand">
                <div className="beige-box" id="seventythree" />
                <div className="beige-box" id="seventyfour" />
                <div className="beige-box" id="seventyfive" />
                <div className="light-brown-box" id="seventysix" />
              </div>
              <div className="stand">
                <div className="beige-box" id="sixtynine" />
                <div className="beige-box" id="seventy" />
                <div className="beige-box" id="seventyone" />
                <div className="light-brown-box" id="seventytwo" />
              </div>
              <div className="stand">
                <div className="beige-box" id="sixtysix" />
                <div className="beige-box" id="sixtyseven" />
                <div className="light-brown-box" id="sixtyeight" />
              </div>
              <div className="stand">
                <div className="light-brown-box" id="sixtythree" />
                <div className="light-brown-box" id="sixtyfour" />
                <div className="light-brown-box" id="sixtyfive" />
              </div>
            </div>
            <div className="level-two-tower-bar">
              <div className="dark-brown-box" id="sixtytwo" />
              <div className="dark-brown-box" id="sixtyone" />
              <div className="dark-brown-box" id="sixty" />
              <div className="dark-brown-box" id="fiftynine" />
              <div className="dark-brown-box" id="fiftyeight" />
              <div className="dark-brown-box" id="fiftyseven" />
              <div className="dark-brown-box" id="fiftysix" />
              <div className="dark-brown-box" id="fiftyfive" />
              <div className="dark-brown-box" id="fiftyfour" />
            </div>
          </LevelFourTower>
        )}
      </GrowthTowerBox>
    </GrowthTowerLayout>
  );
};

export default GrowthTower;

const TowerBox = keyframes`
    0% {
        scale: 0;
    }
    50% {
        scale:1;
        transform: translateY(-50%);
    }
    100% {
        scale:1;
        transform: translateY(0%);
    }
`;

const CatAnimation = keyframes`
  0% {
    scale:1;
    opacity:0;
  }
  25% {
    scale:1;
    opacity: 1;
  }
  50% {
    scale:1;
    transform: translateY(-10%);
  }
  100% {
    scale:1;
    transform: translateY(0%);
  }
`;

const GrowthTowerLayout = styled.div`
  height: 94.3%;
  padding: 32px 30px;

  .cat {
    margin-bottom: -14px;
  }

  #level-one-cat {
    animation: ${CatAnimation} 0.5s ease-in-out;
    animation-delay: 3.2s;
  }

  #level-two-cat {
    animation: ${CatAnimation} 0.5s ease-in-out;
    animation-delay: 6.2s;
  }

  #level-three-cat {
    margin-right: 50px;
    margin-bottom: -35px;
    animation: ${CatAnimation} 0.5s ease-in-out;
    animation-delay: 10.8s;
  }

  #level-four-cat {
    margin-left: 50px;
    animation: ${CatAnimation} 0.5s ease-in-out;
    animation-delay: 15.4s;
  }

  div:is(
      #one,
      #two,
      #three,
      #four,
      #five,
      #six,
      #seven,
      #eight,
      #nine,
      #ten,
      #eleven,
      #twelve,
      #thirteen,
      #fourteen,
      #fifteen,
      #sixteen,
      #seventeen,
      #eighteen,
      #nineteen,
      #twenty,
      #twentyone,
      #twentytwo,
      #twentythree,
      #twentyfour,
      #twentyfive,
      #twentysix,
      #twentyseven,
      #twentyeight,
      #twentynine,
      #thirty,
      #thirtyone,
      #thirtytwo,
      #thirtythree,
      #thirtyfour,
      #thirtyfive,
      #thirtysix,
      #thirtyseven,
      #thirtyeight,
      #thirtynine,
      #forty,
      #fortyone,
      #fortytwo,
      #fortythree,
      #fortyfour,
      #fortyfive,
      #fortysix,
      #fortyseven,
      #fortyeight,
      #fortynine,
      #fifty,
      #fiftyone,
      #fiftytwo,
      #fiftythree,
      #fiftyfour,
      #fiftyfive,
      #fiftysix,
      #fiftyseven,
      #fiftyeight,
      #fiftynine,
      #sixty,
      #sixtyone,
      #sixtytwo,
      #sixtythree,
      #sixtyfour,
      #sixtyfive,
      #sixtysix,
      #sixtyseven,
      #sixtyeight,
      #sixtynine,
      #seventy,
      #seventyone,
      #seventytwo,
      #seventythree,
      #seventyfour,
      #seventyfive,
      #seventysix,
      .cat
    ) {
    scale: 0;
    animation-fill-mode: forwards;
  }
  #one {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 0.2s;
  }
  #two {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 0.4s;
  }
  #three {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 0.6s;
  }
  #four {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 0.8s;
  }
  #five {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 1s;
  }
  #six {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 1.2s;
  }
  #seven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 1.4s;
  }
  #eight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 1.6s;
  }
  #nine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 1.8s;
  }
  #ten {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 2s;
  }
  #eleven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 2.2s;
  }
  #twelve {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 2.4s;
  }
  #thirteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 2.6s;
  }
  #fourteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 2.8s;
  }
  #fifteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 3s;
  }
  #sixteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 3.2s;
  }
  #seventeen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 3.4s;
  }
  #eighteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 3.6s;
  }
  #nineteen {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 3.8s;
  }
  #twenty {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 4s;
  }
  #twentyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 4.2s;
  }
  #twentytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 4.4s;
  }
  #twentythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 4.6s;
  }
  #twentyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 4.8s;
  }
  #twentyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 5s;
  }
  #twentysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 5.2s;
  }
  #twentyseven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 5.4s;
  }
  #twentyeight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 5.6s;
  }
  #twentynine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 5.8s;
  }
  #thirty {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 6s;
  }
  #thirtyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 6.2s;
  }
  #thirtytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 6.4s;
  }
  #thirtythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 6.6s;
  }
  #thirtyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 6.8s;
  }
  #thirtyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 7s;
  }
  #thirtysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 7.2s;
  }
  #thirtyseven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 7.4s;
  }
  #thirtyeight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 7.6s;
  }
  #thirtynine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 7.8s;
  }
  #forty {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 8s;
  }
  #fortyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 8.2s;
  }
  #fortytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 8.4s;
  }
  #fortythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 8.6s;
  }
  #fortyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 8.8s;
  }
  #fortyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 9s;
  }
  #fortysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 9.2s;
  }
  #fortyseven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 9.4s;
  }
  #fortyeight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 9.6s;
  }
  #fortynine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 9.8s;
  }
  #fifty {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 10s;
  }
  #fiftyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 10.2s;
  }
  #fiftytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 10.4s;
  }
  #fiftythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 10.6s;
  }
  #fiftyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 10.8s;
  }
  #fiftyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 11s;
  }
  #fiftysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 11.2s;
  }
  #fiftyseven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 11.4s;
  }
  #fiftyeight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 11.6s;
  }
  #fiftynine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 11.8s;
  }
  #sixty {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 12s;
  }
  #sixtyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 12.2s;
  }
  #sixtytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 12.4s;
  }
  #sixtythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 12.6s;
  }
  #sixtyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 12.8s;
  }
  #sixtyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 13s;
  }
  #sixtysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 13.2s;
  }
  #sixtyseven {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 13.4s;
  }
  #sixtyeight {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 13.6s;
  }
  #sixtynine {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 13.8s;
  }
  #seventy {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 14s;
  }
  #seventyone {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 14.2s;
  }
  #seventytwo {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 14.4s;
  }
  #seventythree {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 14.6s;
  }
  #seventyfour {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 14.8s;
  }
  #seventyfive {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 15s;
  }
  #seventysix {
    animation: ${TowerBox} 0.1s ease;
    animation-delay: 15.2s;
  }
`;

const GrowthTowerBox = styled.div`
  position: relative;
  ${(props) => props.theme.borders.bottomRightNormal1}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .dark-brown-box {
    width: 40px;
    height: 20px;
    background-color: #503a32;
  }
  .light-brown-box {
    width: 40px;
    height: 20px;
    background-color: #af9f90;
  }
  .beige-box {
    width: 40px;
    height: 20px;
    background-color: #dbd4c2;
  }
  .stand {
    display: flex;
  }
  .level-two-tower-bar {
    margin-left: 40px;
  }
`;

const BottomBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
`;

const LevelOneTower = styled.div`
  position: absolute;
  left: 27px;
  bottom: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelTwoTower = styled.div`
  position: absolute;
  bottom: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelThreeTower = styled.div`
  position: absolute;
  z-index: 999;
  right: 27px;
  bottom: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .level-three-stand {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const LevelFourTower = styled.div`
  position: absolute;
  bottom: 202px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .level-four-stand {
    margin-left: 80px;
  }
`;
