import { NextResponse } from "next/server"
import supabase from "../../../utils/database"

export async function GET(){
    try{             
        const { data, error } = await supabase.from("items").select().order("created_at", {ascending: true}) 
        if(error) throw new Error(error.message)      
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: data})
    }catch(err){                                             
        return NextResponse.json({message: `アイテム読み取り失敗（オール）：${err}`}) 
    }
}

export const revalidate = 0