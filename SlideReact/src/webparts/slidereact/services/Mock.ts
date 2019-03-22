import { ListItem } from '../SlidereactWebPart';
import { IListServce } from '../SlidereactWebPart';

export class realdata implements IListServce{
    public getItems(): Promise<Array<ListItem>> {
      return new Promise<Array<ListItem>>((resolve:any) => {
        const fakeData: Array<ListItem> = [
  
            {
                title: 'Sogeti - A part of Capgemini 1',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 1',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 1',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 2',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 2',
                description: 'Sogetis IT-kompetens oc verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 2',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 3',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 3',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 3',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 4',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 4',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 4',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 5',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 5',
                description: 'Sogetis IT-kompetens och v5erksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 5',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 6',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 6',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 6',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 7',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 7',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 7',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 8',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 8',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 8',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 9',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/OFFICE365.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 9',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/POWERSHELL.png'
            },
            {
                title: 'Sogeti - A part of Capgemini 9',
                description: 'Sogetis IT-kompetens och verksamhetsförståelse bidrar till ökad konkurrenskraft och en högre kunskapsnivå för våra kunder.',
                imageUrl: 'https://blog.velingeorgiev.com/static/images/PYTHON.png'
            },
        ];
        resolve(fakeData);
      });
    }
  }
  