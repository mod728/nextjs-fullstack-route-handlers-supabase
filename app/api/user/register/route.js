import { NextResponse } from "next/server"
import supabase from "../../../utils/database"

export async function POST(request){
    const reqBody = await request.json()

    try{
        const { error } = await supabase.from("users").insert(reqBody)
        if(error) throw new Error(error.message)
        return NextResponse.json({message: "ユーザー登録成功"})
    }catch(err){
        return NextResponse.json({message: `ユーザー登録失敗：${err}`})
    }
}