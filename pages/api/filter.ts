import clientPromise from "../../lib/mongodb";

export default async (req:any, res:any) => {
   try {
       const client = await clientPromise;
       const json = JSON.parse(req.body);
       const db = client.db("htc_bill");

       const result = await db
            .collection("full")
            .find({
              $and: [
                {
                  tags: {
                    $in: json["filter2"]
                  }
                },
                {
                  $or: [
                    {
                      status:{
                        $in: json["filter1"]
                      }
                    }
                  ]
                }
              ]
            })
            .sort({ time_recent: 1 })
            .skip((Number(json["id"])-1)*10)
            .toArray();
      
        res.json(result)
        console.log("result ",result);
  
   } catch (e) {
       console.error(e);
   }
}
