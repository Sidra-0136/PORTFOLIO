export default function DecorativeShapes() {
  return (
    <>
      {/* Top Left Pink Irregular Shape */}
      <span
        className="
          absolute
          left-2 top-16
          h-14 w-16
          rotate-[-15deg]
          rounded-[45%_55%_50%_40%]
          bg-[#E8A0B8]/45
          sm:left-5 sm:top-18 sm:h-16 sm:w-20
          md:left-8 md:top-20 md:h-20 md:w-24
        "
      />

      {/* Top Left Sage Outline */}
      <span
        className="
          absolute
          left-[-12px] top-5
          h-16 w-16
          rounded-full
          border-2
          border-[#7F9477]/40
          sm:left-[-8px] sm:top-6 sm:h-20 sm:w-20
          md:left-0 md:top-8 md:h-24 md:w-24
        "
      />

      {/* Top Right Sage Irregular Shape */}
      <span
        className="
          absolute
          right-[-25px] top-6
          h-24 w-28
          rotate-[15deg]
          rounded-[55%_45%_60%_40%]
          bg-[#7F9477]/35
          sm:right-[-20px] sm:top-8 sm:h-28 sm:w-32
          md:right-[-20px] md:top-10 md:h-32 md:w-36
        "
      />

      {/* Pink Four-Point Star */}
      <span
        className="
          absolute
          right-8 top-24
          text-2xl
          text-[#E8A0B8]/70
          sm:right-20 sm:top-24 sm:text-3xl
          md:right-44 md:top-20
        "
      >
        ✦
      </span>

      {/* Small Sage Star */}
      <span
        className="
          absolute
          left-10 top-32
          text-base
          text-[#7F9477]/55
          sm:left-20 sm:top-36 sm:text-lg
          md:left-32 md:top-40 md:text-xl
        "
      >
        ✦
      </span>

      {/* Bottom Left Sage Irregular Shape */}
      <span
        className="
          absolute
          bottom-[-20px] left-[-25px]
          h-24 w-28
          rotate-[-20deg]
          rounded-[60%_40%_45%_55%]
          bg-[#7F9477]/30
          sm:bottom-[-25px] sm:h-28 sm:w-32
          md:h-32 md:w-36
        "
      />

      {/* Bottom Left Pink Curve */}
      <span
        className="
          absolute
          bottom-0 left-0
          h-20 w-20
          rounded-tr-[100%]
          border-2
          border-[#E8A0B8]/50
          sm:h-24 sm:w-24
          md:h-28 md:w-28
        "
      />

      {/* Bottom Right Pink Irregular Shape */}
      <span
        className="
          absolute
          bottom-[-12px] right-[-18px]
          h-20 w-24
          rotate-[15deg]
          rounded-[45%_55%_40%_60%]
          bg-[#E8A0B8]/40
          sm:h-24 sm:w-28
          md:bottom-[-15px] md:right-[-15px] md:h-28 md:w-32
        "
      />

      {/* Bottom Right Sage Star */}
      <span
        className="
          absolute
          bottom-16 right-8
          text-xl
          text-[#7F9477]/65
          sm:bottom-20 sm:right-20 sm:text-2xl
          md:bottom-24 md:right-32
        "
      >
        ✦
      </span>

      {/* Small Pink Star */}
      <span
        className="
          absolute
          bottom-28 left-8
          text-xl
          text-[#E8A0B8]/65
          sm:bottom-32 sm:left-14 sm:text-2xl
          md:bottom-36 md:left-20
        "
      >
        ✦
      </span>
    </>
  );
}