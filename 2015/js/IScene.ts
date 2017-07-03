interface IScene
{
    init(): void;
    
    startScene(): void; // 시작 연출
    stopScene(): void; // 정리 연출 플레이
    clearScene(): void; // 바로 정리
		
    playScene(): void; // 업데이트
		
}