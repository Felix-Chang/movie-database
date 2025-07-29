import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Movie() {

    const location = useLocation();

    const data = location.state?.data;
    console.log(data)

    return <div>
        Movie
    </div>;
}
