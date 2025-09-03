'use client'
import { Button } from "@heroui/react";
import Link from "next/link";


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
<div className="text-8x1 font-bold text-gray-300">404</div>

<h1 className="text-3x1 font-bold tracking-tight">Страница не найдена</h1>

<div className="pt-6">
<Button as={Link} color='primary' variant='shadow' href='/'> 
Вернуться на главную
</Button>


</div>



    </div>
  );
};

export default NotFoundPage;
