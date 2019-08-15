import availability from "../graphics/availability.png";
import lackElectricity from "../graphics/lackofelectricity.png";
import paymentIssues from "../graphics/paymentissues.png";

const ssgroupdata = [
  {
    title: "Lack of access to electricity",
    subtitle: "600 million people in Africa don't have access to electricity",
    solution:
      "Distributed energy resources in microgrids is a solution to accelerate access to electricity",
    icon: lackElectricity
  },
  {
    title: "Grid instability",
    subtitle:
      "Issues  maintaining grid stability, reliability and availability",
    solution:
      "Peer to Peer (P2P) trading platform to better balance the Grid and enable users to trade excess energy",
    icon: availability
  },
  {
    title: "Payment issues",
    subtitle: "Issues  securing and dealing  with customers payments",
    solution:
      "Use of blockchain to secure and lower the fees of micropayment, also ensure transparency for both parties",
    icon: paymentIssues
  }
];

export default ssgroupdata;
