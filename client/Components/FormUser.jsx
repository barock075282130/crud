const FormUser = ({
  create,
  edit,
  user,
  setUser,
  loading,
  stat,
  setStat,
  editStat,
}) => {
  return (
    <>
      <form
        onSubmit={stat === "สร้าง" ? create : edit}
        className="bg-white text-black p-4 border border-gray-300"
      >
        <div>
          <p>ชื่อจริง</p>
          <input
            type="text"
            value={user?.fname}
            className="text_border"
            onChange={(e) => setUser({ ...user, fname: e.target.value })}
            required
          />
        </div>
        <div>
          <p>นามสกุล</p>
          <input
            type="text"
            className="text_border"
            value={user?.lname}
            onChange={(e) => setUser({ ...user, lname: e.target.value })}
            required
          />
        </div>
        <div>
          <p>ชื่อเล่น</p>
          <input
            type="text"
            className="text_border"
            value={user?.nickname}
            onChange={(e) => setUser({ ...user, nickname: e.target.value })}
            required
          />
        </div>
        <div>
          <p>วันเกิด</p>
          <input
            type="date"
            className="text_border"
            value={user?.bdate}
            onChange={(e) => setUser({ ...user, bdate: e.target.value })}
            required
          />
        </div>
        <div>
          <p>อายุ</p>
          <input
            type="text"
            className="text_border"
            value={user?.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            required
          />
        </div>
        <div>
          <p>เพศ</p>
          <select
            className="text_border"
            value={user?.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            required
          >
            <option value="">เพศ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="etc">อื่นๆ</option>
          </select>
        </div>
        <div className="my-2">
          <button className="w-full border border-black py-1">
            {stat === "สร้าง"
              ? loading
                ? `...กำลัง${stat}`
                : stat
              : loading
              ? `...กำลัง${stat}`
              : stat}
          </button>
          {editStat && (
            <button
              className="w-full border border-black py-1"
              onClick={() => setStat()}
            >
              ยกเลิก
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormUser;
