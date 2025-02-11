class FreakybobTeam {
  constructor(
    public name: string = "",
    public age: string = "",
    public role: string = "",
    public isDev?: boolean,
    public isPromoter?: boolean,
    public isGraphics?: boolean
  ) {}
}

function Team() {
  const members = [
    new FreakybobTeam("Squirrel", "13", "Owner", true, false, true),
    new FreakybobTeam("Nomaakip", "17", "Owner", true, true, false),
    new FreakybobTeam("Names", "13", "Dev", true, false, true),
    new FreakybobTeam("Wish", "14", "Owner", true, true, false),
    new FreakybobTeam("Mpax", "N/A", "Dev", true, false, false),
    new FreakybobTeam("Sspruce", "13", "Graphics", false, false, true),
    new FreakybobTeam("Novak", "N/A", "Owner of FreakCam", false, false, false),
    new FreakybobTeam("infinitelyLovesick", "25", "Beta Tester", false, false, false),
    new FreakybobTeam("#2 Twitter Hater", "17", "Peak person and og", false, false, true)
  ];

  console.table(members);
}

function main() {
  Team();
}

main();
