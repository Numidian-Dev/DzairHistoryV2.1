import * as React from "react";
const BookComponent = ({ title, ...props }) => (
  <section className="svg-book-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"auto"}
      viewBox="0 0 151 200"
      fill="none"
      {...props}
      className="svg-book"
    >
      <mask
        id="a"
        width={"100%"}
        height={"auto"}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 0h150.583v200H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#fff"
          d="M150.448 198.047c-.063-4.385-.057-8.776-.094-13.167-.104-12.593-.01-25.192-.052-37.791-.047-12.62.005-25.235-.094-37.855-.198-25.286.099-50.572-.172-75.859-.067-6.432-.01-12.864-.01-19.297 0-.198.005-.39-.005-.583-.031-.578-.219-.766-.813-.781a27 27 0 0 0-1.307 0c-.255.005-.469-.047-.667-.224-.776-.709-1.479-1.474-1.901-2.453-1.062-2.48-1.01-4.938.172-7.37.24-.495.485-.99 1.11-1.151.307-.078.463-.375.458-.677-.01-.334-.214-.579-.542-.714-.26-.11-.526-.073-.786-.073q-8.484-.006-16.969-.005c-37.38 0-74.76.005-112.14-.005-1.172 0-2.334.062-3.454.36-3.583.947-6.547 2.88-8.797 5.838-1.12 1.479-1.854 3.125-1.588 5.062-.11 2.589-.005 5.183-.136 7.781-.156 3.146-.005 6.297-.15 9.454-.146 3.192.005 6.395-.146 9.599-.146 3.197.005 6.395-.146 9.598-.146 3.22.005 6.448-.146 9.672-.146 3.172.005 6.35-.14 9.526-.157 3.224 0 6.448-.147 9.677-.15 3.193 0 6.396-.15 9.6-.146 3.192.005 6.395-.141 9.598-.151 3.198 0 6.396-.146 9.599-.151 3.219 0 6.448-.151 9.672-.146 3.172.005 6.349-.14 9.526-.152 3.245.005 6.5-.152 9.75-.146 3.146-.005 6.297-.14 9.453-.146 3.365 0 6.74-.151 10.11-.136 3.026-.042 6.057-.13 9.088-.13 4.193-.053 8.391-.188 12.584-.068 2.182 0 4.359-.104 6.547-.11 2.317-.146 4.645.224 6.958.64 4.01 2.78 6.969 6.323 8.896 2.843 1.547 5.932 2.015 9.135 1.854.385.015.776.042 1.162.042 23.265-.084 46.53.052 69.796-.115 20.61-.141 41.214-.037 61.823-.047.245 0 .49.016.729-.005.547-.042.797-.271.985-.807.099-.287.083-.573.078-.865M8.292 12.927c-.016-.005-.026-.005-.042-.005.016-.02.036-.042.052-.068-.005.026-.005.047-.01.073"
        />
        {/*  <path
        fill="#000"
        d="m42.415 58.273 2.59 7.346h.103l2.59-7.346h1.109L45.602 67h-1.09l-3.205-8.727zm9.665 8.863q-.887 0-1.556-.421a2.87 2.87 0 0 1-1.04-1.18q-.37-.76-.37-1.774 0-1.022.37-1.785a2.86 2.86 0 0 1 1.04-1.185q.67-.422 1.556-.422t1.55.422q.67.422 1.04 1.185.375.763.375 1.785 0 1.014-.375 1.773-.37.76-1.04 1.18-.665.422-1.55.422m0-.903q.672 0 1.108-.345.435-.345.643-.908.21-.562.209-1.219 0-.656-.209-1.223a2.06 2.06 0 0 0-.644-.916q-.435-.35-1.107-.35-.675 0-1.108.35a2.06 2.06 0 0 0-.644.916 3.5 3.5 0 0 0-.209 1.223q0 .657.21 1.22.207.561.643.907.435.345 1.108.345m4.914 3.221a2.2 2.2 0 0 1-.733-.119l.256-.886q.366.093.647.068a.78.78 0 0 0 .499-.251q.222-.222.405-.72l.187-.512-2.42-6.58h1.09l1.808 5.217h.068l1.807-5.217h1.09l-2.778 7.5q-.188.508-.464.84-.278.337-.644.499a2 2 0 0 1-.818.161m7.759-2.3q-.622 0-1.13-.235a1.94 1.94 0 0 1-.805-.686q-.298-.452-.298-1.091 0-.562.221-.912.222-.353.593-.554.37-.2.818-.298.452-.102.908-.162.596-.077.967-.115.375-.043.545-.14.175-.099.175-.342v-.034q0-.63-.345-.98-.341-.35-1.035-.35-.72 0-1.13.316-.408.316-.575.673l-.955-.34q.256-.597.682-.93.43-.336.938-.468.51-.137 1.005-.137.315 0 .725.077.413.073.797.303.387.23.643.694.256.465.256 1.245V67h-1.006v-.886h-.051a1.8 1.8 0 0 1-.34.456q-.24.243-.636.413-.397.17-.967.17m.153-.904q.597 0 1.006-.234a1.6 1.6 0 0 0 .835-1.385v-.92q-.064.075-.281.14-.213.06-.494.106a22 22 0 0 1-.963.128q-.393.052-.733.166a1.26 1.26 0 0 0-.546.337q-.204.222-.204.605 0 .525.387.793.393.264.993.264m7.325 3.34q-.73 0-1.253-.187a2.7 2.7 0 0 1-.874-.485 2.7 2.7 0 0 1-.55-.64l.802-.562q.135.18.345.409.21.234.57.405.367.174.96.174.792 0 1.308-.383.515-.383.515-1.202v-1.33h-.085q-.111.18-.315.444a1.8 1.8 0 0 1-.58.464q-.375.2-1.014.2a2.73 2.73 0 0 1-1.423-.374 2.63 2.63 0 0 1-.993-1.091q-.362-.717-.362-1.739 0-1.005.353-1.751.354-.75.985-1.16.63-.413 1.457-.413.639 0 1.014.213.38.21.58.478.204.264.315.434h.102v-1.04h.972v6.733q0 .844-.383 1.373a2.2 2.2 0 0 1-1.023.78 3.9 3.9 0 0 1-1.423.25m-.035-3.596q.606 0 1.023-.277.418-.276.635-.796t.217-1.245a3.4 3.4 0 0 0-.213-1.248 1.87 1.87 0 0 0-.63-.848q-.418-.307-1.032-.307-.638 0-1.065.324a1.97 1.97 0 0 0-.635.869 3.4 3.4 0 0 0-.209 1.21q0 .683.213 1.206.217.52.64.818.426.294 1.056.294m7.45 1.142q-.946 0-1.633-.417a2.8 2.8 0 0 1-1.052-1.176q-.367-.759-.367-1.765t.367-1.772a2.9 2.9 0 0 1 1.03-1.202q.666-.435 1.552-.435.51 0 1.01.17.498.172.908.555.409.38.652 1.005.243.627.243 1.543v.426H77.31v-.87h4.023q0-.553-.222-.988a1.67 1.67 0 0 0-.622-.686 1.74 1.74 0 0 0-.946-.251q-.6 0-1.04.298-.435.294-.669.767a2.25 2.25 0 0 0-.234 1.014v.58q0 .741.256 1.257.26.51.72.78.46.264 1.07.264.395 0 .715-.11.324-.116.558-.342.235-.23.363-.57l.971.272q-.153.495-.515.87-.363.37-.895.579a3.3 3.3 0 0 1-1.198.204m8.876-5.215-.904.255a1.7 1.7 0 0 0-.251-.439 1.2 1.2 0 0 0-.443-.358q-.282-.14-.72-.14-.602 0-1.002.277-.396.272-.396.694 0 .375.273.593.272.216.852.362l.971.238q.879.214 1.309.652.43.435.43 1.121 0 .562-.324 1.006a2.15 2.15 0 0 1-.895.699q-.575.255-1.338.255-1.002 0-1.657-.434-.657-.435-.832-1.27l.955-.239q.136.53.516.793.383.264 1.001.264.703 0 1.117-.298.417-.303.417-.725a.76.76 0 0 0-.238-.57q-.24-.235-.733-.35l-1.091-.256q-.9-.213-1.321-.66-.418-.452-.418-1.13 0-.554.311-.98.315-.426.857-.669a3 3 0 0 1 1.236-.243q.971 0 1.525.426.558.427.793 1.125m7.48 5.215a2.56 2.56 0 0 1-1.445-.413q-.627-.417-.98-1.176-.354-.763-.354-1.803 0-1.03.354-1.79.354-.758.984-1.171t1.457-.414q.64 0 1.01.213.375.21.571.478.201.264.311.434h.086v-3.221H99V67h-.971v-1.006h-.12q-.11.18-.315.452-.203.269-.584.482-.379.208-1.01.208m.136-.903q.605 0 1.022-.315.418-.32.636-.883a3.6 3.6 0 0 0 .217-1.308q0-.733-.213-1.282a1.87 1.87 0 0 0-.631-.861q-.417-.311-1.031-.311-.64 0-1.066.328-.421.324-.635.882-.208.554-.208 1.244 0 .7.213 1.27.218.567.639.904.426.332 1.057.332m7.589.903q-.945 0-1.632-.417a2.8 2.8 0 0 1-1.052-1.176q-.367-.759-.367-1.765t.367-1.772a2.9 2.9 0 0 1 1.031-1.202q.664-.435 1.551-.435a3.1 3.1 0 0 1 1.01.17q.498.172.908.555.409.38.652 1.005.243.627.243 1.543v.426h-5.046v-.87h4.023q0-.553-.222-.988a1.67 1.67 0 0 0-.622-.686 1.74 1.74 0 0 0-.946-.251q-.601 0-1.04.298-.435.294-.669.767a2.26 2.26 0 0 0-.234 1.014v.58q0 .741.256 1.257.26.51.72.78.46.264 1.069.264.396 0 .716-.11.324-.116.558-.342a1.55 1.55 0 0 0 .363-.57l.971.272q-.153.495-.515.87a2.5 2.5 0 0 1-.895.579 3.3 3.3 0 0 1-1.198.204m7.752-8.863h1.261l2.966 7.244h.102l2.966-7.244h1.262V67h-.989v-6.63h-.085L116.234 67h-.954l-2.727-6.63h-.086V67h-.988zm11.272 8.795a.74.74 0 0 1-.541-.226.74.74 0 0 1-.226-.54q0-.317.226-.542a.74.74 0 0 1 .541-.226q.316 0 .541.226.226.225.226.541 0 .21-.106.384a.8.8 0 0 1-.277.28.73.73 0 0 1-.384.103m-75.922 8.386a1.34 1.34 0 0 0-.622-1.005q-.545-.358-1.338-.358-.579 0-1.014.187a1.6 1.6 0 0 0-.673.516q-.24.328-.239.746 0 .35.166.6.171.248.435.414.264.162.554.268.289.103.533.167l.886.238q.34.09.759.247.421.158.805.43.388.27.64.691.25.422.25 1.036 0 .707-.37 1.278-.367.57-1.074.908-.703.336-1.709.336-.937 0-1.623-.302a2.6 2.6 0 0 1-1.074-.844 2.4 2.4 0 0 1-.44-1.257h1.092q.042.495.332.818.294.32.742.478.451.153.971.153a2.9 2.9 0 0 0 1.087-.196q.48-.2.763-.554.28-.358.28-.835 0-.435-.242-.708a1.8 1.8 0 0 0-.64-.443 7 7 0 0 0-.856-.298l-1.074-.307q-1.022-.294-1.619-.84-.597-.545-.597-1.427 0-.734.397-1.278.4-.55 1.074-.853a3.6 3.6 0 0 1 1.512-.307q.845 0 1.5.303.657.299 1.04.818.388.52.41 1.18zm3.75 2.609V82h-1.006v-8.727h1.005v3.204h.086a1.85 1.85 0 0 1 .69-.805q.465-.303 1.236-.303.669 0 1.172.269.503.264.78.814.28.544.28 1.389V82h-1.005v-4.09q0-.78-.405-1.207-.4-.43-1.112-.43-.495 0-.886.209-.388.209-.614.609-.222.4-.221.972m8.01 4.09a2.7 2.7 0 0 1-1.13-.234 1.94 1.94 0 0 1-.805-.686q-.298-.452-.298-1.091 0-.562.221-.912.222-.353.593-.554.37-.2.818-.298a10 10 0 0 1 .908-.162q.596-.077.967-.115.375-.043.545-.14.175-.099.175-.342v-.034q0-.63-.345-.98-.34-.35-1.036-.35-.72 0-1.129.316-.409.315-.575.673l-.955-.34q.255-.597.682-.93.43-.336.938-.468.51-.137 1.005-.137.315 0 .725.077.412.073.797.303.388.23.643.694.255.465.256 1.245V82h-1.006v-.886h-.051a1.8 1.8 0 0 1-.34.456q-.24.243-.636.413-.397.17-.967.17m.153-.903q.597 0 1.006-.234a1.6 1.6 0 0 0 .835-1.385v-.92q-.063.075-.281.14-.213.06-.495.106a22 22 0 0 1-.963.128q-.39.052-.733.166a1.26 1.26 0 0 0-.545.337q-.204.222-.205.605 0 .525.388.793.393.264.993.264m6.165.75-1.994-6.546h1.057l1.415 5.012h.068l1.397-5.011h1.074l1.381 4.994h.068l1.415-4.995h1.057L69.85 82h-.988l-1.432-5.028h-.102L65.896 82zm8.877-1.193-.068.46q-.074.485-.222 1.04-.145.554-.303 1.044-.157.49-.26.78h-.767l.145-.72q.09-.449.18-1.002.093-.549.153-1.125l.05-.477zm7.71 1.33a2.56 2.56 0 0 1-1.445-.414q-.627-.417-.98-1.176-.354-.763-.354-1.803 0-1.03.354-1.79.354-.758.984-1.171t1.458-.414q.639 0 1.01.213.375.21.57.478.201.263.312.434h.085v-3.221h1.006V82h-.972v-1.006h-.12q-.11.18-.315.452-.204.269-.583.482-.38.208-1.01.208m.136-.904q.605 0 1.023-.315.417-.32.635-.883.217-.566.217-1.308 0-.733-.213-1.282a1.87 1.87 0 0 0-.63-.861q-.42-.311-1.032-.311-.639 0-1.065.328-.422.324-.635.882-.21.555-.21 1.244 0 .7.214 1.27.217.567.64.904.425.332 1.056.332m6.771.92a2.7 2.7 0 0 1-1.129-.234 1.94 1.94 0 0 1-.805-.686q-.3-.452-.299-1.091 0-.562.222-.912.222-.353.592-.554.37-.2.818-.298a10 10 0 0 1 .908-.162q.597-.077.967-.115.375-.043.546-.14.174-.099.175-.342v-.034q0-.63-.346-.98-.34-.35-1.035-.35-.72 0-1.13.316-.408.315-.575.673l-.954-.34q.255-.597.682-.93.431-.336.937-.468.511-.137 1.006-.137.316 0 .724.077.413.073.797.303.388.23.644.694.255.465.255 1.245V82h-1.005v-.886h-.052a1.8 1.8 0 0 1-.34.456q-.24.243-.635.413-.397.17-.968.17m.154-.903q.596 0 1.005-.234a1.6 1.6 0 0 0 .836-1.385v-.92q-.065.075-.282.14-.213.06-.494.106a22 22 0 0 1-.963.128q-.392.052-.733.166a1.26 1.26 0 0 0-.545.337q-.205.222-.205.605 0 .525.388.793.391.264.993.264m5.688-3.187V82h-1.006v-6.546h.972v1.023h.085q.23-.499.699-.8.468-.308 1.21-.308.664 0 1.163.273.498.269.776.818.276.546.277 1.38V82h-1.006v-4.09q0-.772-.4-1.203-.401-.434-1.1-.434-.482 0-.86.209-.375.209-.593.609t-.217.972m10.65-1.142-.904.255a1.7 1.7 0 0 0-.251-.439 1.2 1.2 0 0 0-.443-.358q-.282-.14-.72-.14-.602 0-1.002.277-.396.272-.396.694 0 .375.273.593.272.216.852.362l.971.238q.879.213 1.309.652.43.435.43 1.121 0 .562-.324 1.006a2.15 2.15 0 0 1-.895.699q-.575.255-1.338.255-1.001 0-1.657-.434-.657-.435-.831-1.27l.954-.239q.136.53.516.793.383.264 1.001.264.703 0 1.117-.298.417-.303.417-.725a.76.76 0 0 0-.238-.57q-.239-.235-.733-.35l-1.091-.256q-.9-.213-1.321-.66-.418-.453-.418-1.13 0-.554.311-.98.315-.426.857-.669a3 3 0 0 1 1.236-.243q.971 0 1.525.427.559.425.793 1.124M41.92 99.454v-9h.972v1.04h.12q.11-.17.306-.434.2-.269.571-.478.375-.213 1.014-.213.827 0 1.458.414.63.413.984 1.171.354.76.354 1.79 0 1.04-.354 1.803-.353.759-.98 1.176-.627.413-1.445.413-.63 0-1.01-.208a1.9 1.9 0 0 1-.583-.482 6 6 0 0 1-.316-.452h-.085v3.46zm.99-5.727q0 .742.216 1.308.218.564.635.883.419.315 1.023.315.63 0 1.053-.332.426-.337.639-.904.217-.57.217-1.27 0-.69-.213-1.244a1.9 1.9 0 0 0-.635-.882q-.422-.328-1.06-.328-.615 0-1.032.31a1.87 1.87 0 0 0-.63.862q-.214.55-.214 1.282m7.329-5.454V97h-1.006v-8.727zm5.967 6.05v-3.868h1.005V97h-1.005v-1.108h-.069a2.15 2.15 0 0 1-.715.848q-.486.345-1.228.345-.614 0-1.09-.268a1.9 1.9 0 0 1-.75-.818q-.273-.55-.273-1.385v-4.16h1.005v4.092q0 .715.4 1.141.405.427 1.032.427.375 0 .763-.192.392-.192.656-.588.27-.396.269-1.01m7.484-2.402-.904.255a1.7 1.7 0 0 0-.251-.439 1.2 1.2 0 0 0-.443-.358q-.282-.14-.72-.14-.601 0-1.002.277-.396.272-.396.694 0 .375.272.593.273.216.853.362l.971.238q.879.214 1.309.652.43.435.43 1.121 0 .562-.324 1.006a2.15 2.15 0 0 1-.895.699q-.575.255-1.338.255-1.002 0-1.658-.434-.656-.435-.83-1.27l.954-.239q.136.53.516.793.384.264 1.001.264.703 0 1.117-.298.417-.303.417-.725a.76.76 0 0 0-.238-.57q-.24-.235-.733-.35l-1.091-.256q-.9-.213-1.321-.66-.418-.453-.418-1.13 0-.554.311-.98.315-.426.857-.669a3 3 0 0 1 1.235-.243q.972 0 1.526.427.558.425.793 1.124M65.323 97v-6.546h1.006V97zm.511-7.636a.72.72 0 0 1-.507-.2.64.64 0 0 1-.209-.482q0-.281.21-.482a.72.72 0 0 1 .506-.2.7.7 0 0 1 .503.2.64.64 0 0 1 .213.482.64.64 0 0 1-.213.481.7.7 0 0 1-.503.2m5.08 7.772q-.945 0-1.631-.417a2.8 2.8 0 0 1-1.053-1.176q-.366-.759-.366-1.765t.366-1.772a2.9 2.9 0 0 1 1.031-1.202q.665-.435 1.552-.435a3.1 3.1 0 0 1 1.01.17q.498.172.907.555.41.38.652 1.005.243.627.243 1.543v.426h-5.046v-.87h4.023q0-.552-.221-.988a1.67 1.67 0 0 0-.623-.686 1.74 1.74 0 0 0-.945-.251q-.602 0-1.04.298-.435.294-.67.767a2.25 2.25 0 0 0-.234 1.014v.58q0 .741.256 1.257.26.51.72.78a2.1 2.1 0 0 0 1.07.264q.396 0 .716-.11.324-.116.558-.342.234-.23.362-.57l.972.272q-.153.495-.516.87-.362.37-.895.579a3.3 3.3 0 0 1-1.197.204m8.366-2.812v-3.87h1.005V97H79.28v-1.108h-.068a2.15 2.15 0 0 1-.716.848q-.486.345-1.227.345-.614 0-1.091-.268a1.9 1.9 0 0 1-.75-.818q-.273-.55-.273-1.385v-4.16h1.005v4.092q0 .715.401 1.141.405.427 1.031.427.375 0 .763-.192.392-.192.656-.588.27-.396.269-1.01M82.127 97v-6.546h.972v.99h.068q.18-.487.648-.79a1.9 1.9 0 0 1 1.057-.302q.11 0 .277.004.165.005.251.013v1.023a3 3 0 0 0-.234-.038q-.18-.03-.38-.03-.477 0-.852.2a1.47 1.47 0 0 0-.801 1.334V97zm9.102-5.08-.904.256a1.7 1.7 0 0 0-.251-.439 1.2 1.2 0 0 0-.443-.358q-.282-.14-.72-.14-.602 0-1.002.277-.396.272-.396.694 0 .375.272.593.273.216.853.362l.971.238q.879.214 1.309.652.43.435.43 1.121 0 .562-.324 1.006a2.15 2.15 0 0 1-.895.699q-.575.255-1.338.255-1.001 0-1.657-.434-.657-.435-.831-1.27l.954-.239q.136.53.516.793.383.264 1.001.264.703 0 1.117-.298.417-.303.417-.725a.76.76 0 0 0-.238-.57q-.24-.235-.733-.35l-1.091-.256q-.9-.213-1.321-.66-.418-.453-.418-1.13 0-.554.311-.98.315-.426.857-.669a3 3 0 0 1 1.236-.243q.971 0 1.525.427.558.425.793 1.124m2.366 5.148a.74.74 0 0 1-.541-.226.74.74 0 0 1-.226-.54q0-.317.226-.542a.74.74 0 0 1 .54-.226q.316 0 .542.226.226.225.226.541 0 .21-.107.384a.8.8 0 0 1-.277.28.73.73 0 0 1-.383.103m3.305 0a.74.74 0 0 1-.542-.226.74.74 0 0 1-.226-.54q0-.317.226-.542a.74.74 0 0 1 .541-.226q.315 0 .542.226.225.225.225.541 0 .21-.106.384a.8.8 0 0 1-.277.28.73.73 0 0 1-.383.103m3.304 0a.74.74 0 0 1-.541-.226.74.74 0 0 1-.226-.54q0-.317.226-.542a.74.74 0 0 1 .541-.226q.315 0 .541.226.226.225.226.541 0 .21-.106.384a.8.8 0 0 1-.277.28.73.73 0 0 1-.384.103"
      /> */}
        {/* <text className="svg-text"  x="30" y="50" fill="black" fontSize="14" fontFamily="Arial" textAnchor="middle" // Définit la largeur du texte
   >
      Voyages de M. Shaw, dans plusieurs...
      </text> */}
      </g>
      <path
        fill="#D9D9D9"
        d="M15.583 13.156c-2.458.36-4.958.823-7.349.219.052-.48.235-1.63.375-2.094.094-.318.266-.51.625-.469.12.016.245.006.365.006 9.052.005 18.11-.1 27.161.046 10.672.172 21.35-.052 32.021.141 10.313.188 20.625-.042 30.938.146 10.844.193 21.687-.026 32.531.156 3.833.063 7.661.037 11.495.094.375.005.646.073.828.432.125.255.312.48.495.745-.282.203-.552.13-.808.13-3.031.01-6.067.01-9.099.01-11.213 0-22.427-.109-33.64.037-12.667.162-25.333.052-37.995.094-12.646.047-25.292-.031-37.937.057-3.105.021-6.209.037-9.308.089-.25.005-.484.026-.698.161m-5.916-2.911c2.541.026 5.078.067 7.614.104 10.188.146 20.38-.037 30.568.146 10.698.192 21.396-.042 32.094.146 10.724.192 21.448-.016 32.172.14 10.067.151 20.14.042 30.213.052.365 0 .724-.015 1.083.068.178.042.459-.02.422-.26a3 3 0 0 0-.328-.954c-.135-.255-.432-.161-.666-.166-3.344-.068-6.688.026-10.037-.115-4.359-.187-8.724.021-13.094-.146-4.77-.187-9.552.037-14.328-.15-4.333-.178-8.677.036-13.02-.141-4.433-.188-8.87.03-13.308-.151-4.458-.177-8.922.026-13.385-.141-4.724-.177-9.453.031-14.183-.156-4.192-.167-8.385.031-12.583-.136-4.625-.182-9.26.021-13.89-.146-3.808-.135-7.62-.036-11.433-.046-.411 0-.818-.021-1.229-.089-.495-.078-1.016-.026-1.526-.036-.177-.006-.344.052-.448.192-.422.589-.932 1.12-1.172 1.87.177.13.323.11.464.115m10.041-4.417c8.079.156 16.157-.036 24.235.156 8.005.183 16.01-.041 24.015.146 8.005.182 16.01-.042 24.021.14 8.219.188 16.443-.02 24.667.141 7.354.146 14.713.042 22.068.052.265 0 .541-.03.796.026.99.204 1.985.053 2.974.094.355.021.552-.14.542-.515-.021-.558.109-1.105.224-1.646.078-.36-.062-.438-.359-.432h-.438c-1.453.015-2.906.083-4.359.104-9.776.13-19.552-.042-29.328.145-9.756.188-19.506-.041-29.26.146-9.704.188-19.412-.01-29.115.141-10.964.167-21.933-.052-32.901.177-.558.01-1.115.02-1.672-.005-.953-.042-1.698.432-2.443.943 2.125.145 4.23.145 6.333.187m-8.255 1.786c2.031.053 4.068.037 6.104.11 4.552.172 9.115-.037 13.672.15 4.432.183 8.87-.036 13.313.147 4.432.182 8.87-.032 13.307.146 4.531.182 9.068-.037 13.604.145 4.48.183 8.969-.03 13.453.146 4.604.177 9.214-.036 13.823.151 4.261.167 8.531-.026 12.797.136 4.703.182 9.406-.01 14.115.146 3.901.135 7.812.041 11.718.046.198 0 .391-.02.584.01 1.64.246 3.291.058 4.937.12.292.011.469-.057.37-.421-.099-.35-.135-.714-.203-1.068-.109-.526-.109-.531-.63-.536-3.297-.063-6.594-.032-9.891-.11-7.927-.177-15.859.037-23.792-.15-8.151-.188-16.302.04-24.453-.147-8.12-.187-16.25.047-24.375-.146-7.953-.187-15.911.021-23.87-.14-7.156-.14-14.317-.042-21.479-.052-.552 0-1.114.067-1.661-.104-.13-.037-.334-.047-.422.03-.458.407-1.026.704-1.432 1.34.224.03.317.051.411.051"
      />
      <mask
        id="b"
        width={18}
        height={190}
        x={0}
        y={10}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 10h17.25v190H0z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="#DFC58F"
          d="M2.797 11.302c.713-.24 1.849.604 2.52.896 1.126.49 1.022.922 9.714.838.198-.015.48.006.912-.005-.235.38-.292 2.094-.292 2.542.01 7.672-.417 14.172-.338 21.838.255 25.407-.032 50.808.156 76.214.182 24.797.01 49.594.156 74.391.02 3.635.037 7.27.089 10.906 0 .323.083.62.161.922-3.203.161-6.292-.308-9.135-1.854-3.542-1.928-5.683-4.886-6.323-8.896-.37-2.313-.334-4.641-.224-6.959.104-2.187.036-4.364.104-6.546.135-4.193.057-8.391.187-12.584.089-3.031-.005-6.062.13-9.088.152-3.37.006-6.745.152-10.11.135-3.156-.006-6.307.14-9.453.157-3.25 0-6.505.151-9.75.146-3.177-.005-6.354.14-9.526.152-3.224 0-6.453.152-9.672.146-3.203-.005-6.4.146-9.599.146-3.203-.005-6.406.14-9.599.151-3.203 0-6.406.151-9.599.146-3.229-.01-6.453.146-9.677.146-3.177-.005-6.354.14-9.526.152-3.224 0-6.453.147-9.672.15-3.203 0-6.4.146-9.599.15-3.203 0-6.406.145-9.599.146-3.156-.005-6.307.151-9.453.13-2.599.027-5.192.136-7.781"
        />
      </g>
    </svg>
    <div className="svg-book-title">
      <p>{title}</p>
    </div>
    <div className="book-title">{title}</div>
  </section>
);
export default BookComponent;