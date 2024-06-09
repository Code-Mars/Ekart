const FloatingInput = ({ id, name, value, handleChange, errorMessage }) => {
    return <div className={`w-full`}> <div className={`relative w-full`}>
        <input autoComplete="off"
            id={id}
            type={`${(name=="Password" || name=="cnfPassword")?"password":"text"}`}
            placeholder=""
            value={value}
            onChange={(e) => handleChange(id, e.target.value)}
            className={`border invalid:border-red-400 w-full border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500 focus:ring-0 peer ${errorMessage?"border-red-500":value!==""?"border-green-500":""}`}
        />
        <label htmlFor={id} className={`absolute bg-white ease-out  duration-300 text-gray-500 transform -translate-y-4 font-semibold scale-90 top-1 z-10 origin-[0] px-2 peer-focus:text-blue-600 peer-placeholder-shown:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:font-semibold peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${errorMessage?"text-red-500":value!==""?"text-green-500":""}`} >{name}</label>
    </div>
        {errorMessage && <p className="mt-1 ml-1 font-semibold text-[11px]/[10px] text-red-500 ">{errorMessage}</p>}
        </div>
}
export default FloatingInput;