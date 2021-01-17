using BlazorChatApp.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorChatApp
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#blazor-app");
            builder.Services.AddSingleton<ChatMessageRepository>();

            await builder.Build().RunAsync();
        }
    }
}
