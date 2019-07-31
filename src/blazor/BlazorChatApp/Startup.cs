using BlazorChatApp.Core;
using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorChatApp
{
    public class Startup
    {
        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("#blazor-app");
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ChatMessageRepository>();
        }
    }
}