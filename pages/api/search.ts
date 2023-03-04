import clientPromise from "../../lib/mongodb";

const search = async (req:any, res:any) => {
   try {
       const client = await clientPromise;
       const json = JSON.parse(req.body);
       const db = client.db("htc_bill");
       console.log(json["keywords"]);

       const result = await db
            .collection("full")
            .find(
                {
                  $or: [
                    {
                      keywords:{
                        $in: json["keywords"]
                      }
                    }
                  ]
                }
            )
            .sort({ time_recent: json["time"] })
            .toArray();
      
        res.json(result)
        console.log("result ",result);
  
   } catch (e) {
       console.error(e);
   }
}

export default search
