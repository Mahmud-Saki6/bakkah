import React from "react";
import Headers from "../components/Headers";
import DivisionCard from "../components/DivisionCard";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

function Management() {
  return (
    <div>
      <Headers></Headers>
      <div className="all-hero">
        <img src="director.svg" />
      </div>
      {/* Core Business start */}
      <div className="Core-title">
        <h2>Management</h2>
      </div>

      {/* Core Business end */}

      {/* TeamCard start */}
      <div className="division-card-container">
        <div className="division-card4">
          <TeamCard
            name="Major Mohammed Asif Chowdhury(retd.)"
            role="Head of Real Estate"
            image="/mng1.png"
          />

          <TeamCard
            name="Rahman Abu Jafar"
            role="Head Of Aviation"
            image="/mng2.png"
          />

          <TeamCard
            name="Brig Gen Md Mohsin (Retd.)"
            role="Head of Trade and Technology"
            image="/mng3.png"
          />

          <TeamCard
            name="Shahadur Rahman Parvez"
            role="Head of Healthcare"
            image="/mng4.png"
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Management;
