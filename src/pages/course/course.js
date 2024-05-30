import useSWR from "swr";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Spin, Button } from "@douyinfe/semi-ui";
import { Title } from "@douyinfe/semi-ui/lib/es/skeleton/item";

export const Course = () => {
    const navigate = useNavigate();
    const { 
        data: course,
        error,
        isLanding,
     } = useSWR(`http://localhost:3000/courses/${courseId}`, url =>

     );
     if (isLanding) {
        return <Spin />;
     }
     if (error) {
        return <div>{error.message}</div>;
     }
     return (
        <div>
            <Title>{course.name}</Title>
            <Button onClick={() => navigate(`/callRoll`)}>上课</Button>
        </div>
     );
};