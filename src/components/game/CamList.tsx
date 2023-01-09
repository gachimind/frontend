import { useAppSelector } from '@redux/hooks';

// TODO: 사용자들의 캠 대신 이름으로 참여 여부를 먼저 나타냈다. 수정되어야 한다.
const CamList = () => {
  const { room } = useAppSelector((state) => state.gameRoom);
  const { user } = useAppSelector((state) => state.user);

  return (
    <div>
      {room?.participants.map((participant, index) => (
        <p key={participant.userId}>
          {index === 0 && '(방장)'} {participant.nickname} {participant.userId === user?.userId && '(나)'}
        </p>
      ))}
    </div>
  );
};

export default CamList;
