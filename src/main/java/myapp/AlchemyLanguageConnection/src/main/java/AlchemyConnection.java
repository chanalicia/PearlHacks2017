import com.ibm.watson.developer_cloud.alchemy.v1.AlchemyLanguage;
import com.ibm.watson.developer_cloud.alchemy.v1.model.DocumentSentiment;
import com.ibm.watson.developer_cloud.alchemy.v1.model.Entities;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;

@Path("/api")
public class AlchemyConnection {

    @POST
    @Path("/{comments}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response sayPlainTextHello(@PathParam("comments") String id) {
        AlchemyLanguage service = new AlchemyLanguage();
        service.setApiKey("cd960e076d3fa57f9e92623540ebfc1f8fabe242");

        Map<String,Object> params = new HashMap<String, Object>();
        params.put(AlchemyLanguage.RAW, id);
        Entities sentiment = service.getEntities(params).execute();
        return Response.status(200).entity(sentiment).build();
    }


    public static void main(String[] args) {
        AlchemyLanguage service = new AlchemyLanguage();
        service.setApiKey("cd960e076d3fa57f9e92623540ebfc1f8fabe242");

        Map<String,Object> params = new HashMap<String, Object>();
        params.put(AlchemyLanguage.TEXT, "IBM Watson won the Jeopardy television show hosted by Alex Trebek");
        DocumentSentiment sentiment = service.getSentiment(params).execute();
        System.out.println(sentiment);

    }
}
