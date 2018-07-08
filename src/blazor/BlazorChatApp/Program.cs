using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;

namespace BlazorChatApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services => { });
            new BrowserRenderer(serviceProvider).AddComponent<App>("#blazor-app");
        }
    }
}