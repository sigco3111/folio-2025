import labData from './lab.js'
import projectsData from './projects.js'

const achievements =
[
    [
        'landingLeave',
        "모험을 떠나요!",
        "출발 구역에서 벗어나세요.",
        1
    ],
    [
        'areas',
        "여행자",
        "모든 구역을 방문하세요.",
        13,
        true // Unique
    ],
    [
        'projects',
        "와이파이도 고칠 수 있나요?",
        "<strong>프로젝트</strong> 구역의 모든 작품을 확인하세요.",
        projectsData.length,
        true // Unique
    ],
    [
        'lab',
        "나도 과학자랍니다",
        "<strong>연구실</strong> 구역의 모든 작품을 확인하세요.",
        labData.length,
        true // Unique
    ],
    [
        'cookie',
        "갓 구운 쿠키",
        "쿠키 <strong>1개</strong>를 받으세요.",
        1
    ],
    [
        'cookie',
        "반죽을 만들어요",
        "쿠키 <strong>10개</strong>를 받으세요.",
        10
    ],
    [
        'cookie',
        "쿠키가 가득",
        "쿠키 <strong>100개</strong>를 받으세요.",
        100
    ],
    [
        'cookie',
        "쿠키 클리커",
        "쿠키 <strong>1000개</strong>를 받으세요.",
        1000
    ],
    [
        'whisper',
        "메시지를 남겨요",
        "방문자 메시지 (정적판에서는 비활성화).",
        1
    ],
    [
        'sea',
        "바닷속으로",
        "물고기와 친구가 되어 보세요.",
        1
    ],
    [
        'upsideDown',
        "거북이",
        "차가 뒤집히게 해 보세요.",
        1
    ],
    [
        'frontFlip',
        "앞으로 한 바퀴",
        "앞으로 공중제비를 돌고 네 바퀴로 착지하세요.",
        1
    ],
    [
        'backFlip',
        "믿음의 공중제비",
        "뒤로 공중제비를 돌고 네 바퀴로 착지하세요.",
        1
    ],
    [
        'suspensions',
        "로우라이더",
        "차량 서스펜션을 사용하세요.",
        4
    ],
    [
        'honk',
        "빵빵!",
        "경적을 울려 보세요.",
        10
    ],
    [
        'explosiveCrates',
        "대폭발",
        "모든 폭발 상자를 터뜨리세요.",
        20,
        true // Unique
    ],
    [
        'goHigh',
        "하늘이 한계",
        "<strong>15미터</strong> 높이에 도달하세요.",
        15
    ],
    [
        'strike',
        "볼링 한 판",
        "스트라이크를 달성하세요.",
        1
    ],
    [
        'toiletDown',
        "방해 금지",
        "간이 화장실을 넘어뜨리세요.",
        1
    ],
    [
        'circuitFinish',
        "참가 메달",
        "경주를 완주하세요.",
        1
    ],
    [
        'circuitFinishFast',
        "번개처럼!",
        "<strong>30초</strong> 안에 경주를 완주하세요.",
        1
    ],
    [
        'circuitLeaderboard',
        "부지런한 레이서",
        "온라인 순위표 (정적판에서는 비활성화).",
        1
    ],
    [
        'fullDay',
        "할 일이 없나요?",
        "하루 주기 전체를 한 번에 보내세요.",
        1
    ],
    [
        'distanceDriven',
        "첫걸음",
        "1km를 주행하세요.",
        1
    ],
    [
        'distanceDriven',
        "아직 멀었나요?",
        "10km를 주행하세요.",
        10
    ],
    [
        'distanceDriven',
        "집에 도착했어요!",
        "100km를 주행하세요.",
        100
    ],
    [
        'sacrifice',
        "혼돈의 신에게",
        "제단에 자신을 바치세요.",
        1
    ],
    [
        'cataclysm',
        "나를 보라!",
        "대재앙을 목격하세요.",
        1
    ],
    [
        'weatherSnow',
        "눈사람 만들래요?",
        "눈 오는 날씨를 보세요.",
        1
    ],
    [
        'weatherRain',
        "빗속의 노래",
        "비 오는 날씨를 보세요.",
        1
    ],
    [
        'lightning',
        "1.21 기가와트!",
        "번개에 맞으세요.",
        1
    ],
    [
        'waterfall',
        "게이머의 직감",
        "보물을 기대했나요?",
        1
    ],
    [
        'fan',
        "내 유일한 팬",
        "선풍기를 꺼내 보세요.",
        1
    ],
    [
        'reset',
        "방 청소",
        "모든 물체를 원래대로 돌려놓으세요.",
        1
    ],
    [
        'statueDown',
        "혁명!",
        "조각상을 넘어뜨리세요.",
        1
    ],
    [
        'konami',
        "위 위 아래 아래...",
        "나머지는 알고 있죠?",
        1
    ],
    [
        'debug',
        "버그가 아니라 기능",
        "디버그 UI에 들어가세요.",
        1
    ],
    [
        'hacker',
        "해커",
        "이 업적은 달성할 수 없습니다.",
        1
    ],
]

export default achievements.filter(row => !["whisper", "circuitLeaderboard"].includes(row[0]))
