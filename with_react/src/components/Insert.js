import React, { useCallback, useState } from "react";

const Insert = ({ onInsert }) => {
  const [planValue, setPlanValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const onPlanChange = (e) => {
    setPlanValue(e.target.value);
  };

  const onDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(planValue, dateValue);
    setPlanValue("");
    setDateValue("");
    e.preventDefault();
  };

  return (
    <div>
      <div>할 일 등록</div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="what is your plan?"
            onChange={onPlanChange}
            value={planValue}
          />
          <input
            type="text"
            placeholder="set due date"
            onChange={onDateChange}
            value={dateValue}
          />
        </div>
        <div>
          <button type="submit">등록</button>
          <button type="reset">닫기</button>
        </div>
      </form>
    </div>
  );
};

export default Insert;
