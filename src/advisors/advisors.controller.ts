import { Controller , Get , Param } from '@nestjs/common';

@Controller('advisors')
export class AdvisorsController {
    @Get()
    getAdvisors(){
        return "list of advisors";
    }

    @Get(':id')
    getAdvisor(@Param('id') id: number ){
        return `Advisor id: ${id}`;
    }
}
