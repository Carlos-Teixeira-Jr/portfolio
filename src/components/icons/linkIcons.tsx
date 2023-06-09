import * as React from "react";

const LinkIcon = ({className="", fill="currentColor", width="70", height="70", viewBox="0 96 960 960"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} className={className} height={height} viewBox={viewBox} width={width}><path d="M439 801H280q-94.11 0-159.555-65.422Q55 670.156 55 576.304t65.445-160.078Q185.89 350 280 350h159v95H280.429q-55.512 0-93.471 37.765-37.958 37.764-37.958 93Q149 631 186.958 669q37.959 38 93.471 38H439v94ZM308 612v-72h344v72H308Zm213 189v-94h158.571q55.512 0 93.471-37.765 37.958-37.764 37.958-93Q811 521 773.042 483q-37.959-38-93.471-38H521v-95h159q93.79 0 159.895 66.148Q906 482.297 906 576.148 906 670 839.895 735.5T680 801H521Z"/></svg>
);
export default LinkIcon;